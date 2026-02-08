const siteData = {
  profile: {
    name: "Hongjun Chang",
    nameKo: "장홍준",
    title: "Ph.D. Candidate (ABD)",
    department: "School of Energy Systems Engineering",
    university: "Chung-Ang University",
    labName: "MEMLab — Multiscale Energy Materials and System Modelling Laboratory",
    labUrl: "https://sites.google.com/view/memlab",
    photo: "",
    links: [
      { icon: "fas fa-graduation-cap", label: "Google Scholar", url: "https://scholar.google.com/citations?user=iGA6UWkAAAAJ&hl=en" },
      { icon: "fas fa-envelope", label: "Email", url: "mailto:hongjun@cau.ac.kr" }
    ]
  },

  about: [
    "I am a Ph.D. candidate (ABD) in the School of Energy Systems Engineering at <strong>Chung-Ang University</strong>, working under the supervision of <a href=\"https://sites.google.com/view/memlab\" target=\"_blank\">Prof. Janghyuk Moon</a> at the Multiscale Energy Materials and System Modelling Laboratory (MEMLab).",
    "My research focuses on <strong>computational modeling and data-driven approaches</strong> for next-generation energy storage systems, including lithium-ion batteries, all-solid-state batteries, and lithium metal batteries. I combine multi-scale simulations with machine learning techniques to understand and design advanced battery materials and electrolytes."
  ],

  research: [
    { icon: "fas fa-atom", title: "Electrolyte Engineering", desc: "Mechanistic understanding of electrolyte behavior through atomic-scale simulations. Design of advanced electrolytes for fast-charging and low-temperature operation." },
    { icon: "fas fa-battery-full", title: "Lithium Metal Batteries", desc: "Understanding lithium nucleation and growth mechanisms on host materials. Development of strategies for stable lithium metal anodes." },
    { icon: "fas fa-microchip", title: "All-Solid-State Batteries", desc: "Electrochemical-mechanical interaction modeling in solid electrolytes. Thermal stability analysis and interface design for solid-state systems." },
    { icon: "fas fa-chart-line", title: "Data-Driven Battery Design", desc: "Multi-scale simulations combined with data-driven methods for enhanced ion transport and battery performance optimization." },
    { icon: "fas fa-layer-group", title: "Electrode Materials", desc: "Cathode coating layer design, defect-mediated lithium adsorption, and novel electrode architectures for high-performance batteries." },
    { icon: "fas fa-flask", title: "Interfacial Reactions", desc: "Understanding solvation structure and interfacial chemistry in localized high-concentration electrolytes." }
  ],

  publications: [
    {
      year: 2026,
      title: "Integrated One-Step Dry Process Enabling Prelithiated Thick Electrodes without Primer Coating for High Energy Density and Initial Coulombic Efficiency",
      authors: "H.W. Lee, W. Jeong, S.S. Park, H.J. Ji, J.S. Woo, J. Lee, Y.J. An, Y.C. Hwang, <strong>H. Chang</strong>, T. Song, J. Moon*, J. Choi*, W.J. Kwak*",
      journal: "Energy & Environmental Science",
      volume: "",
      note: ""
    },
    {
      year: 2026,
      title: "Rational Design of Aqueous Zinc-Ion Battery Electrolytes Based on Intermolecular Interactions between Co-solvents and Anions",
      authors: "J. Lim†, <strong>H. Chang†</strong>, I.Y. Jeong, M. Jeong, Y. Yoo, H. Baeg, T. Yim, D. Byun, K.Y. Chung, H.S. Kim, J. Moon*, S.H. Oh*",
      journal: "Journal of Materials Chemistry A",
      volume: "",
      note: "†Co-first author"
    },
    {
      year: 2025,
      title: "Electrolyte Engineering for Lithium-ion Batteries: Mechanistic Insights into the Development of Electrolyte from Atomic-Scale Simulation",
      authors: "<strong>H. Chang</strong>, H. Joo, B.G. Kim, E. Figgemeier, J. Moon*",
      journal: "Energy Storage Materials",
      volume: "104826",
      note: ""
    },
    {
      year: 2025,
      title: "Ester-Guided Dynamic Li⁺ Solvation Enables Plating-Less, Fast-Charging Li-Ion Batteries",
      authors: "S. Lee, H. Lee, <strong>H. Chang</strong>, M. Lim, M. Lee, B. Koo, K.E. Ryou, S.M. Bak, H. Lee, J. Moon*",
      journal: "ACS Nano",
      volume: "19(16), 15789–15802",
      note: ""
    },
    {
      year: 2025,
      title: "Interfacial Impacts of Diluent-Mediated Anion Conformational Changes in Locally Concentrated Ionic Liquid Electrolytes",
      authors: "M. Lim, <strong>H. Chang</strong>, G. Kim, J. Seo, B. Kim, H. Lee, J. Moon*, H. Lee*",
      journal: "Energy Storage Materials",
      volume: "104288",
      note: ""
    },
    {
      year: 2025,
      title: "Prolonged Cycle Life of Composite Cathodes via Ionically Permeable Li₃PO₄ Surface Engineering on Conductive Agents to Suppress Degradation of Sulfide Solid Electrolytes",
      authors: "Y. Jo, C. Ha, H. Choi, T. Song, Y. Kim, J. Moon*, Y.J. Kim*",
      journal: "Energy Storage Materials",
      volume: "77, 104193",
      note: ""
    },
    {
      year: 2025,
      title: "Innovative Approaches in Cathode Material Selection: High-Throughput Computational Screening for Anode-Free Zinc Battery and Beyond",
      authors: "B.T. Tham, S. Park, <strong>H. Chang</strong>, T. Moon, J. Moon*",
      journal: "Frontiers in Batteries and Electrochemistry",
      volume: "4, 1723256",
      note: ""
    },
    {
      year: 2024,
      title: "Stable Immobilization of Lithium Polysulfides Using Three-Dimensional Ordered Mesoporous Mn₂O₃ as the Host Material in Lithium–Sulfur Batteries",
      authors: "S.J. Park, Y.J. Choi, H. Kim, M.J. Hong, <strong>H. Chang</strong>, J. Moon*, Y.J. Kim, J. Mun*",
      journal: "Carbon Energy",
      volume: "6(6), e487",
      note: ""
    },
    {
      year: 2024,
      title: "Sustaining Surface Lithiophilicity of Ultrathin Li-Alloy Coating Layers on Current Collector for Zero-Excess Li-Metal Batteries",
      authors: "J. Seo, J. Lim, <strong>H. Chang</strong>, J. Lee, J. Woo, I. Jung, Y. Kim, B. Kim, J. Moon*, H. Lee*",
      journal: "Small",
      volume: "20(47), 2402988",
      note: ""
    },
    {
      year: 2024,
      title: "Vertically Aligned Conductive Metal–Organic Frameworks with Switchable Electrical Conductivity for Li Metal Anode",
      authors: "Y. Jin, I.H. Lee, T. Gu, S.H. Jung, <strong>H. Chang</strong>, B.S. Kim, J. Moon*, D. Whang*",
      journal: "Advanced Functional Materials",
      volume: "34(23), 2310097",
      note: ""
    },
    {
      year: 2024,
      title: "Critical Factors Contributing to the Thermal Runaway of Thiophosphate Solid Electrolytes for All-Solid-State Batteries",
      authors: "T. Kim, <strong>H. Chang</strong>, G. Song, S. Lee, K. Kim, S. Lee, J. Moon*, K.T. Lee*",
      journal: "Advanced Functional Materials",
      volume: "34(42), 2404806",
      note: ""
    },
    {
      year: 2024,
      title: "Diluent-Mediated Interfacial Reactions in Localized-High-Concentration Electrolytes for Fast-Charging Lithium-Ion Batteries",
      authors: "S. Park, <strong>H. Chang</strong>, H. Lee, M. Lim, H. An, J. Kang, S. Lee, M. Lee, C. Han, J. Moon*",
      journal: "Journal of Materials Chemistry A",
      volume: "12(27), 16517–16527",
      note: ""
    },
    {
      year: 2024,
      title: "Sequential Element Control of Non-Precious Dual Atom Catalysts on Mesoporous Carbon Nanotubes for High Performance Lithium–Oxygen Batteries",
      authors: "Y. Lim, <strong>H. Chang</strong>, H. Kim, Y.J. Yoo, Y.J. Rho, B.R. Kim, H.R. Byon, J. Moon*",
      journal: "Journal of Materials Chemistry A",
      volume: "12(42), 28953–28964",
      note: ""
    },
    {
      year: 2024,
      title: "A Black Zirconia Cathode Coating Layer Enabling Facile Charge Diffusion and Surface Lattice Stabilization for Lithium-Ion Batteries",
      authors: "Y.J. Choi, S. Jang, <strong>H. Chang</strong>, Y. Kim, S. Kim, G.Y. Kim, J. Lee, J. Moon*, J. Kim*",
      journal: "Journal of Materials Chemistry A",
      volume: "12(44), 30667–30675",
      note: ""
    },
    {
      year: 2024,
      title: "Superior Electroadhesion Force with Permittivity-Engineered Bilayer Films Using Electrostatic Simulation and Machine Learning Approaches",
      authors: "S. Park, <strong>H. Chang</strong>, J. Kim, Y. Gwak, J. Moon*",
      journal: "Scientific Reports",
      volume: "14(1), 17026",
      note: ""
    },
    {
      year: 2023,
      title: "Boosting Interfacial Kinetics in Extremely Fast Rechargeable Li-Ion Batteries with Linear Carbonate-Based, LiPF₆-Concentrated Electrolyte",
      authors: "H. Lee, H. An, <strong>H. Chang</strong>, M. Lee, S. Park, S. Lee, J. Kang, S. Byon, B. Koo, J. Moon*",
      journal: "Energy Storage Materials",
      volume: "63, 102995",
      note: ""
    },
    {
      year: 2023,
      title: "Diagnosis of Current Flow Patterns Inside Fault-Simulated Li-Ion Batteries via Non-Invasive, In Operando Magnetic Field Imaging",
      authors: "M. Lee, Y. Shin, <strong>H. Chang</strong>, D. Jin, H. Lee, M. Lim, J. Seo, T. Band, K. Kaufmann, J. Moon*",
      journal: "Small Methods",
      volume: "7(11), 2300748",
      note: ""
    },
    {
      year: 2023,
      title: "Growth Mechanism of Lithium Clusters on the Surface of Porous Carbon Framework for Lithium Metal Batteries",
      authors: "H. Qutaish, <strong>H. Chang</strong>, J.H. Suh, S.A. Han, Y. Yum, M.S. Park, J. Moon*, J.H. Kim*",
      journal: "ACS Materials Letters",
      volume: "5(6), 1593–1600",
      note: ""
    },
    {
      year: 2023,
      title: "Defect Mediated Lithium Adsorption on Graphene-Based Silicon Composite Electrode for High Capacity and High Stability Lithium-Ion Battery",
      authors: "<strong>H. Chang</strong>, M.S. Park, J.H. Kim, J. Moon*",
      journal: "Journal of Electroanalytical Chemistry",
      volume: "931, 117179",
      note: ""
    },
    {
      year: 2023,
      title: "Data-Driven Designs and Multi-Scale Simulations of Enhanced Ion Transport in Low-Temperature Operation for Lithium-Ion Batteries",
      authors: "<strong>H. Chang</strong>, Y. Park, J.H. Kim, S. Park, B.G. Kim, J. Moon*",
      journal: "Korean Journal of Chemical Engineering",
      volume: "40(3), 539–547",
      note: ""
    }
  ],

  education: [
    {
      degree: "Ph.D. in Energy Systems Engineering",
      school: "Chung-Ang University, Seoul, South Korea",
      period: "2020 – Present",
      badge: "ABD",
      desc: "Advisor: Prof. Janghyuk Moon\nMEMLab — Multiscale Energy Materials and System Modelling Laboratory"
    }
  ],

  footer: {
    address: "School of Energy Systems Engineering, Chung-Ang University\n84 Heukseok-ro, Dongjak-gu, Seoul 06974, South Korea"
  }
};
