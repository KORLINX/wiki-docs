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
              label: 'NX15 Series BLE Module',
              collapsed: true,
              collapsible: true,
              link: {
                type: 'generated-index',
                title: 'NX15 Series BLE Module',
                description: 'NX15 Series BLE Module documentation',
              },
              items: [
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX15-Series-BLE-Module/NX15-Series-BLE-Module_Overview',
                  label: 'Overview',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX15-Series-BLE-Module/NX15-Series-BLE-Module_Quick_Start',
                  label: 'Quick Start',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX15-Series-BLE-Module/NX15-Series-BLE-Module_Hardware_Design',
                  label: 'Hardware Design',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX15-Series-BLE-Module/NX15-Series-BLE-Module_Antenna_Design',
                  label: 'Antenna Design',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX15-Series-BLE-Module/NX15-Series-BLE-Module_Low_Power_Guide',
                  label: 'Low Power Guide',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX15-Series-BLE-Module/NX15-Series-BLE-Module_BLE_Application_Guide',
                  label: 'BLE Application Guide',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX15-Series-BLE-Module/NX15-Series-BLE-Module_Thread_Matter_Guide',
                  label: 'Thread / Matter Guide',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX15-Series-BLE-Module/NX15-Series-BLE-Module_FAQ',
                  label: 'FAQ',
                },
              ],
            },

            {
              type: 'category',
              label: 'NX15 Module Integration',
              collapsed: true,
              collapsible: true,
              link: {
                type: 'generated-index',
                title: 'NX15 Module Integration',
                description:
                  'Guides for integrating NX15 modules into custom hardware designs.',
              },
              items: [
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX15-Module-Integration/NX15-Module-Integration_Overview',
                  label: 'Overview',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX15-Module-Integration/NX15-Module-Integration_Model_Selection',
                  label: 'Model Selection',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX15-Module-Integration/NX15-Module-Integration_PCB_Integration',
                  label: 'PCB Integration',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX15-Module-Integration/NX15-Module-Integration_LGA_Pad_Layout',
                  label: 'LGA Pad Layout',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX15-Module-Integration/NX15-Module-Integration_Handling_Soldering',
                  label: 'Handling & Soldering',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX15-Module-Integration/NX15-Module-Integration_FAQ',
                  label: 'FAQ',
                },
              ],
            },

            {
              type: 'category',
              label: 'NX40 Series BLE Module',
              collapsed: true,
              collapsible: true,
              link: {
                type: 'generated-index',
                title: 'NX40 Series BLE Module',
                description:
                  'Technical documentation for the NX40 Series BLE Module.',
              },
              items: [
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX40-Series-BLE-Module/NX40-Series-BLE-Module_Overview',
                  label: 'Overview',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX40-Series-BLE-Module/NX40-Series-BLE-Module_Quick_Start',
                  label: 'Quick Start',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX40-Series-BLE-Module/NX40-Series-BLE-Module_Hardware_Design',
                  label: 'Hardware Design',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX40-Series-BLE-Module/NX40-Series-BLE-Module_Antenna_Design',
                  label: 'Antenna Design',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX40-Series-BLE-Module/NX40-Series-BLE-Module_Low_Power_Guide',
                  label: 'Low Power Guide',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX40-Series-BLE-Module/NX40-Series-BLE-Module_BLE_Application_Guide',
                  label: 'BLE Application Guide',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX40-Series-BLE-Module/NX40-Series-BLE-Module_802154_Thread_Guide',
                  label: '802.15.4 / Thread Guide',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX40-Series-BLE-Module/NX40-Series-BLE-Module_FAQ',
                  label: 'FAQ',
                },
              ],
            },

            {
              type: 'category',
              label: 'NX40 Module Integration',
              collapsed: true,
              collapsible: true,
              link: {
                type: 'generated-index',
                title: 'NX40 Module Integration',
                description:
                  'Guides for integrating NX40 modules into custom hardware designs.',
              },
              items: [
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX40-Module-Integration/NX40-Module-Integration_Overview',
                  label: 'Overview',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX40-Module-Integration/NX40-Module-Integration_Model_Selection',
                  label: 'Model Selection',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX40-Module-Integration/NX40-Module-Integration_PCB_Integration',
                  label: 'PCB Integration',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX40-Module-Integration/NX40-Module-Integration_Pad_Pin_Layout',
                  label: 'Pad / Pin Layout',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX40-Module-Integration/NX40-Module-Integration_Handling_Soldering',
                  label: 'Handling & Soldering',
                },
                {
                  type: 'doc',
                  id: 'Network/Bluetooth/NX40-Module-Integration/NX40-Module-Integration_FAQ',
                  label: 'FAQ',
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