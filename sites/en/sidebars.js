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
        // =====================================================
        // Cellular
        // =====================================================
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
            // -------------------------------------------------
            // KSE-91A
            // -------------------------------------------------
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

            // -------------------------------------------------
            // KSP-N51U
            // -------------------------------------------------
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

            // -------------------------------------------------
            // KSP-N51U-M.2
            // -------------------------------------------------
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

        // =====================================================
        // Bluetooth
        // =====================================================
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
            // -------------------------------------------------
            // NX15 Series
            // Custom cover page
            // -------------------------------------------------
            {
              type: 'category',
              label: 'NX15 Series',
              collapsed: true,
              collapsible: true,
              link: {
                type: 'doc',
                id: 'Network/Bluetooth/NX15_Series',
              },
              items: [
                // ---------------------------------------------
                // NX15 Module
                // No generated-index
                // ---------------------------------------------
                {
                  type: 'category',
                  label: 'NX15 Module',
                  collapsed: true,
                  collapsible: true,
                  items: [
                    {
                      type: 'doc',
                      id: 'Network/Bluetooth/NX15_Module/NX15-Module_Overview',
                      label: 'Overview',
                    },
                    {
                      type: 'doc',
                      id: 'Network/Bluetooth/NX15_Module/NX15-Module_Specifications',
                      label: 'Specifications',
                    },
                    {
                      type: 'doc',
                      id: 'Network/Bluetooth/NX15_Module/NX15-Module_Pin_Map',
                      label: 'Pin Map',
                    },
                    {
                      type: 'doc',
                      id: 'Network/Bluetooth/NX15_Module/NX15-Module_Antenna',
                      label: 'Antenna',
                    },
                    {
                      type: 'doc',
                      id: 'Network/Bluetooth/NX15_Module/NX15-Module_Handling',
                      label: 'Handling & Soldering',
                    },
                  ],
                },

                // ---------------------------------------------
                // NX15 Dev Kit
                // No generated-index
                // ---------------------------------------------
                {
                  type: 'category',
                  label: 'NX15 Dev Kit',
                  collapsed: true,
                  collapsible: true,
                  items: [
                    {
                      type: 'doc',
                      id: 'Network/Bluetooth/NX15_Dev_Kit/NX15_Dev_Kit_Overview',
                      label: 'Overview',
                    },
                    {
                      type: 'doc',
                      id: 'Network/Bluetooth/NX15_Dev_Kit/Hardware',
                      label: 'Hardware',
                    },
                  ],
                },
              ],
            },

            // -------------------------------------------------
            // NX40 Dev Kit
            // -------------------------------------------------
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
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX40_Dev_Kit/Hardware',
                  label: 'Hardware',
                },
              ],
            },
          ],
        },

        // =====================================================
        // LPWAN
        // =====================================================
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

        // =====================================================
        // WiFi
        // =====================================================
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

        // =====================================================
        // Ethernet
        // =====================================================
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

        // =====================================================
        // Satellite
        // =====================================================
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

    // =========================================================
    // Sensor
    // =========================================================
    {
      type: 'category',
      label: 'Sensor',
      collapsed: true,
      collapsible: true,
      link: {
        type: 'generated-index',
        title: 'Sensor',
        description: 'KORLINX sensor product documentation',
      },
      items: [
        {
          type: 'category',
          label: 'Radars',
          collapsed: true,
          collapsible: true,
          link: {
            type: 'doc',
            id: 'Sensor/Radars/Radar_Intro',
          },
          items: [
            // -------------------------------------------------
            // AS-611Bn
            // -------------------------------------------------
            {
              type: 'category',
              label: 'AS-611Bn',
              collapsed: true,
              collapsible: true,
              link: {
                type: 'generated-index',
                title: 'AS-611Bn',
                description: 'AS-611Bn radar documentation',
              },
              items: [
                {
                  type: 'doc',
                  id: 'Sensor/Radars/AS-611Bn/Overview',
                  label: 'Overview',
                },
                {
                  type: 'doc',
                  id: 'Sensor/Radars/AS-611Bn/Quick_Start',
                  label: 'Quick Start',
                },
              ],
            },

            // -------------------------------------------------
            // AS-613 Radar
            // -------------------------------------------------
            {
              type: 'category',
              label: 'AS-613 Radar',
              collapsed: true,
              collapsible: true,
              link: {
                type: 'generated-index',
                title: 'AS-613 Radar',
                description: 'AS-613 radar documentation',
              },
              items: [
                {
                  type: 'doc',
                  id: 'Sensor/Radars/AS-613_Radar/Overview',
                  label: 'Overview',
                },
                {
                  type: 'doc',
                  id: 'Sensor/Radars/AS-613_Radar/Quick_Start',
                  label: 'Quick Start',
                },
              ],
            },

            // -------------------------------------------------
            // AS-614
            // -------------------------------------------------
            {
              type: 'category',
              label: 'AS-614',
              collapsed: true,
              collapsible: true,
              link: {
                type: 'generated-index',
                title: 'AS-614',
                description: 'AS-614 radar documentation',
              },
              items: [
                {
                  type: 'doc',
                  id: 'Sensor/Radars/AS-614/Overview',
                  label: 'Overview',
                },
                {
                  type: 'doc',
                  id: 'Sensor/Radars/AS-614/Quick_Start',
                  label: 'Quick Start',
                },
              ],
            },

            // -------------------------------------------------
            // AS-BW
            // -------------------------------------------------
            {
              type: 'category',
              label: 'AS-BW',
              collapsed: true,
              collapsible: true,
              link: {
                type: 'generated-index',
                title: 'AS-BW',
                description: 'AS-BW communication module documentation',
              },
              items: [
                {
                  type: 'doc',
                  id: 'Sensor/Radars/AS-BW/Overview',
                  label: 'Overview',
                },
                {
                  type: 'doc',
                  id: 'Sensor/Radars/AS-BW/Quick_Start',
                  label: 'Quick Start',
                },
              ],
            },
          ],
        },
      ],
    },

    // =========================================================
    // IoT Industrial
    // =========================================================
    {
      type: 'category',
      label: 'IoT Industrial',
      collapsed: true,
      collapsible: true,
      link: {
        type: 'generated-index',
        title: 'IoT Industrial',
        description: 'IoT Industrial documentation',
      },
      items: [
        // -----------------------------------------------------
        // NEO-Edge40
        // -----------------------------------------------------
        {
          type: 'category',
          label: 'NEO-Edge40',
          collapsed: false,
          collapsible: true,
          link: {
            type: 'generated-index',
            title: 'NEO-Edge40',
            description:
              'Learn about the NEO-Edge40 industrial edge gateway and its hardware.',
          },
          items: [
            {
              type: 'doc',
              id: 'IoT_Industrial/Neo_Edge40/Neo_Edge40_Overview',
              label: 'Overview',
            },
            {
              type: 'doc',
              id: 'IoT_Industrial/Neo_Edge40/Neo_Edge40_Hardware',
              label: 'Hardware',
            },
          ],
        },
      ],
    },
  ],

  // ===========================================================
  // Tutorials
  // ===========================================================
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
