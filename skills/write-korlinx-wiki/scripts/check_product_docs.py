#!/usr/bin/env python3
"""Check mechanical conventions for KORLINX Markdown/MDX product pages."""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path


FRONTMATTER_RE = re.compile(r"\A---\s*\n(.*?)\n---\s*\n", re.DOTALL)
IMAGE_RE = re.compile(r"<img\b(?P<attrs>.*?)/>", re.DOTALL)
ATTR_RE = re.compile(r'\b(?P<name>src|alt)="(?P<value>[^"]*)"')
LINK_RE = re.compile(r"(?<!!)\[[^\]]+\]\(([^)\s]+)(?:\s+['\"][^)]*['\"])?\)")
H1_RE = re.compile(r"^#\s+(.+?)\s*$", re.MULTILINE)


def frontmatter_value(block: str, key: str) -> str | None:
    match = re.search(rf"^{re.escape(key)}:\s*(.+?)\s*$", block, re.MULTILINE)
    return match.group(1).strip().strip("'\"") if match else None


def resolve_doc_link(page: Path, raw: str) -> bool:
    target = raw.split("#", 1)[0].split("?", 1)[0]
    if not target or target.startswith(("/", "http://", "https://", "mailto:")):
        return True
    candidate = page.parent / target
    if candidate.suffix in {".md", ".mdx"}:
        return candidate.is_file()
    return any(
        path.is_file()
        for path in (
            candidate,
            candidate.with_suffix(".md"),
            candidate.with_suffix(".mdx"),
            candidate / "index.md",
            candidate / "index.mdx",
        )
    )


def check_page(page: Path, repo: Path) -> list[str]:
    errors: list[str] = []
    text = page.read_text(encoding="utf-8")
    match = FRONTMATTER_RE.match(text)
    if not match:
        return [f"{page}: missing YAML frontmatter"]

    block = match.group(1)
    values = {key: frontmatter_value(block, key) for key in ("title", "description", "keywords")}
    for key, value in values.items():
        if not value:
            errors.append(f"{page}: missing frontmatter field '{key}'")

    h1s = H1_RE.findall(text[match.end() :])
    if len(h1s) != 1:
        errors.append(f"{page}: expected exactly one H1, found {len(h1s)}")
    elif values["title"] and h1s[0].strip() != values["title"]:
        errors.append(f"{page}: H1 does not match frontmatter title")

    for image in IMAGE_RE.finditer(text):
        attrs = {m.group("name"): m.group("value") for m in ATTR_RE.finditer(image.group("attrs"))}
        src, alt = attrs.get("src", ""), attrs.get("alt", "").strip()
        if not alt or alt.lower() in {"image", "photo", "picture"}:
            errors.append(f"{page}: image has missing or unhelpful alt text")
        if src.startswith("/img/"):
            asset = repo / "static" / src.lstrip("/")
            if not asset.is_file():
                errors.append(f"{page}: image does not exist: {src}")

    for raw_link in LINK_RE.findall(text):
        if not resolve_doc_link(page, raw_link):
            errors.append(f"{page}: unresolved relative link: {raw_link}")

    return errors


def confined_files(raw_paths: list[str], repo: Path) -> tuple[list[Path], list[str]]:
    pages: list[Path] = []
    errors: list[str] = []
    for raw in raw_paths:
        path = Path(raw)
        if path.is_absolute() or ".." in path.parts:
            errors.append(f"{raw}: use a normalized project-relative path")
            continue
        candidate = repo / path
        try:
            resolved = candidate.resolve(strict=True)
            resolved.relative_to(repo)
        except (FileNotFoundError, ValueError):
            errors.append(f"{raw}: path is missing or outside the repository")
            continue
        if candidate.is_symlink() or any(parent.is_symlink() for parent in candidate.parents if parent != repo.parent):
            errors.append(f"{raw}: symlinked paths are not allowed")
            continue
        if resolved.is_dir():
            pages.extend(sorted(p for p in resolved.rglob("*") if p.is_file() and p.suffix in {".md", ".mdx"}))
        elif resolved.is_file() and resolved.suffix in {".md", ".mdx"}:
            pages.append(resolved)
        else:
            errors.append(f"{raw}: expected a Markdown/MDX file or directory")
    return list(dict.fromkeys(pages)), errors


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("paths", nargs="+", help="Project-relative page or directory paths")
    args = parser.parse_args()

    repo = Path.cwd().resolve()
    if not (repo / "sites" / "en" / "docs").is_dir():
        print("error: run from the wiki-docs repository root", file=sys.stderr)
        return 2

    pages, errors = confined_files(args.paths, repo)
    if not pages and not errors:
        errors.append("no Markdown or MDX pages found")
    for page in pages:
        errors.extend(check_page(page, repo))

    if errors:
        for error in errors:
            print(f"error: {error}", file=sys.stderr)
        print(f"Product docs check failed: {len(errors)} error(s).", file=sys.stderr)
        return 1

    print(f"Product docs check passed: {len(pages)} page(s).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
