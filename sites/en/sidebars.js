/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  networkSidebar: [
    {
      type: 'category',
      label: 'Network',
      collapsed: false,
      collapsible: true,
      link: {
        type: 'doc',
        id: 'Network/index',
      },
      items: [
        {
          type: 'category',
          label: 'Cellular',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'Network/Cellular/Cellular_Intro',
          },
          items: [
            {
              type: 'category',
              label: 'KSE-91A',
              collapsed: true,
              collapsible: true,
              link: {
                type: 'generated-index',
                title: 'KSE-91A',
                description: 'KSE-91A documentation',
              },
              items: [
                {
                  type: 'doc',
                  id: 'Network/Cellular/KSE-91A/KSE-91A_Overview',
                  label: 'Overview',
                },
                {
                  type: 'doc',
                  id: 'Network/Cellular/KSE-91A/KSE-91A_Quick_Start',
                  label: 'Quick Start',
                },
                {
                  type: 'doc',
                  id: 'Network/Cellular/KSE-91A/KSE-91A_Network_Attach',
                  label: 'Network Attach',
                },
                {
                  type: 'doc',
                  id: 'Network/Cellular/KSE-91A/KSE-91A_Send_Data',
                  label: 'Send Data',
                },
                {
                  type: 'doc',
                  id: 'Network/Cellular/KSE-91A/KSE-91A_FAQ',
                  label: 'FAQ',
                },
              ],
            },

            {
              type: 'category',
              label: 'KSP-N51U',
              collapsed: true,
              collapsible: true,
              link: {
                type: 'generated-index',
                title: 'KSP-N51U',
                description: 'KSP-N51U documentation',
              },
              items: [
                {
                  type: 'doc',
                  id: 'Network/Cellular/KSP-N51U/KSP-N51U_Overview',
                  label: 'Overview',
                },
                {
                  type: 'doc',
                  id: 'Network/Cellular/KSP-N51U/KSP-N51U_Quick_Start',
                  label: 'Quick Start',
                },
                {
                  type: 'doc',
                  id: 'Network/Cellular/KSP-N51U/KSP-N51U_Network_Attach',
                  label: 'Network Attach',
                },
                {
                  type: 'doc',
                  id: 'Network/Cellular/KSP-N51U/KSP-N51U_Send_Data',
                  label: 'Send Data',
                },
                {
                  type: 'doc',
                  id: 'Network/Cellular/KSP-N51U/KSP-N51U_FAQ',
                  label: 'FAQ',
                },
              ],
            },

            {
              type: 'category',
              label: 'KSP-N51U-M.2',
              collapsed: true,
              collapsible: true,
              link: {
                type: 'generated-index',
                title: 'KSP-N51U-M.2',
                description: 'KSP-N51U-M.2 documentation',
              },
              items: [
                {
                  type: 'doc',
                  id: 'Network/Cellular/KSP-N51U-M.2/KSP-N51U-M.2_Overview',
                  label: 'Overview',
                },
                {
                  type: 'doc',
                  id: 'Network/Cellular/KSP-N51U-M.2/KSP-N51U-M.2_Quick_Start',
                  label: 'Quick Start',
                },
                {
                  type: 'doc',
                  id: 'Network/Cellular/KSP-N51U-M.2/KSP-N51U-M.2_Network_Attach',
                  label: 'Network Attach',
                },
                {
                  type: 'doc',
                  id: 'Network/Cellular/KSP-N51U-M.2/KSP-N51U-M.2_Send_Data',
                  label: 'Send Data',
                },
                {
                  type: 'doc',
                  id: 'Network/Cellular/KSP-N51U-M.2/KSP-N51U-M.2_FAQ',
                  label: 'FAQ',
                },
              ],
            },
          ],
        },

        {
          type: 'category',
          label: 'Bluetooth',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'Network/Bluetooth/Bluetooth_Intro',
          },
          items: [
            {
              type: 'category',
              label: 'NX15 Dev Kit',
              collapsed: true,
              collapsible: true,
              link: {
                type: 'generated-index',
                title: 'NX15 Dev Kit',
                description: 'NX15 Dev Kit documentation',
              },
              items: [
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX15_Dev_Kit/NX15_Dev_Kit_Overview',
                  label: 'Overview',
                },
                // {
                //   type: 'doc',
                //   id: 'Network/Bluetooth/NX15-Dev-Kit/NX15-Dev-Kit_Example_Code',
                //   label: 'Example Code',
                // },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX15_Dev_Kit/Hardware',
                  label: 'Hardware',
                },
              ],
            },

            {
              type: 'category',
              label: 'NX40 Dev Kit',
              collapsed: true,
              collapsible: true,
              link: {
                type: 'generated-index',
                title: 'NX40 Dev Kit',
                description: 'NX40 Dev Kit documentation',
              },
              items: [
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX40_Dev_Kit/NX40_Dev_Kit_Overview',
                  label: 'Overview',
                },
                // {
                //   type: 'doc',
                //   id: 'Network/Bluetooth/NX40_Dev_Kit/NX40_Dev_Kit_Example_Code',
                //   label: 'Example Code',
                // },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX40_Dev_Kit/Hardware',
                  label: 'Hardware',
                },
              ],
            },
          ],
        },

        {
          type: 'category',
          label: 'LPWAN',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'Network/LPWAN/LPWAN_Intro',
          },
          items: [],
        },

        {
          type: 'category',
          label: 'WiFi',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'Network/WiFi/WiFi_Intro',
          },
          items: [],
        },

        {
          type: 'category',
          label: 'Ethernet',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'Network/Ethernet/Ethernet_Intro',
          },
          items: [],
        },

        {
          type: 'category',
          label: 'Satellite',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'Network/Satellite/Satellite_Intro',
          },
          items: [],
        },
      ],
    },
  ],

  tutorialsSidebar: [
    {
      type: 'doc',
      id: 'Tutorials/Tutorials_Intro',
      label: 'Tutorials Overview',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      collapsible: true,
      link: {
        type: 'doc',
        id: 'Tutorials/Getting_Started/GS_Intro',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Cloud Integration',
      collapsed: true,
      collapsible: true,
      link: {
        type: 'doc',
        id: 'Tutorials/Cloud_Integration/Cloud_Intro',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Industrial',
      collapsed: true,
      collapsible: true,
      link: {
        type: 'doc',
        id: 'Tutorials/Industrial/Industrial_Intro',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsed: true,
      collapsible: true,
      link: {
        type: 'doc',
        id: 'Tutorials/Advanced/Advanced_Intro',
      },
      items: [],
    },
  ],
};

export default sidebars;
