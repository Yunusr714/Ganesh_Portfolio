// Comprehensive data for Mr. Devadi Ganesh - Assistant Professor & AI Researcher

export const professorData = {
  personal: {
    name: "Mr. Devadi Ganesh",
    prefix: "Mr.",
    role: "Assistant Professor",
    department: "Department of Computer Science and Engineering",
    institution: "GMR Institute of Technology (GMRIT) – Deemed to be University",
    location: "Rajam, Andhra Pradesh, India",
    joinedDate: "17 September 2023",
    status: "Present",
    email: "ganesh.d@gmrit.edu.in",
    alternateEmail: "devadi.ganesh@gmail.com",
    cvUrl: "/DG_Biodata.pdf",
    tagline: "Assistant Professor, AI & Deep Learning Researcher",
    shortBio: "Assistant Professor in the Department of Computer Science and Engineering at GMRIT with a strong research-oriented profile spanning Artificial Intelligence, Machine Learning, Deep Learning, Medical Imaging, Computer Vision, Quantum Computing, and Cybersecurity.",
    fullBio: "Assistant Professor in the Department of Computer Science and Engineering at GMR Institute of Technology (GMRIT) – Deemed to be University, Rajam, with a research-oriented profile in Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Data Science, Quantum Computing, Cybersecurity and the Internet of Things. Holds an M.Tech and is currently pursuing a Ph.D. at SR University, Warangal. Combines rigorous classroom teaching and student mentoring with high-impact journal publications, a published patent filing, conference presentations, and departmental academic coordination.",
    avatar: "/profile.png", // Professor Devadi Ganesh official portrait
    stats: [
      { label: "Research Publications", value: "11+", detail: "Scopus & International Journals" },
      { label: "Patents Published", value: "1", detail: "Indian Patent Office (2024)" },
      { label: "Academic Degrees", value: "Ph.D.(P), M.Tech, B.Tech", detail: "SRU, AU, SVCET" },
      { label: "FDPs & Certifications", value: "15+", detail: "IITs, IIIT, NIT & Google" }
    ]
  },

  academicIds: [
    { name: "ORCID", id: "0009-0009-9057-748X", url: "https://orcid.org/0009-0009-9057-748X", color: "#a6ce39" },
    { name: "Scopus ID", id: "59704507400", url: "https://www.scopus.com/authid/detail.uri?authorId=59704507400", color: "#e9711c" },
    { name: "Researcher ID", id: "KVB-2599-2024", url: "https://www.webofscience.com/wos/author/record/KVB-2599-2024", color: "#5c768d" },
    { name: "Vidwan ID", id: "476384", url: "https://vidwan.inflibnet.ac.in/profile/476384", color: "#1e88e5" }
  ],

  researchAreas: [
    { title: "Artificial Intelligence & ML", desc: "Predictive algorithms, intelligent decision systems, and adaptive learning architectures.", icon: "Cpu" },
    { title: "Deep Learning & Intelligent Computing", desc: "CNNs, ConvNeXt, UNet segmentation, Transfer Learning, and Maxout Classifiers.", icon: "Brain" },
    { title: "Computer Vision & Object Detection", desc: "Faster R-CNN architectures, real-time visual tracking, and automated stream analytics.", icon: "Eye" },
    { title: "Medical Image Analysis", desc: "Diabetic Retinopathy grading, brain tumor segmentation, and OsteoNet ConvNeXt diagnostics.", icon: "Activity" },
    { title: "NLP & Sentiment Analysis", desc: "Aspect-based sentiment analysis, EXB_RNN hybrid ensemble models, and textual semantics.", icon: "MessageSquareCode" },
    { title: "Cybersecurity & Cloud Security", desc: "Threat intelligence integration, hybrid multithreaded password analysis, and zero-trust cloud.", icon: "ShieldCheck" },
    { title: "Quantum Computing Applications", desc: "Quantum algorithms, quantum circuit simulations, and emerging next-gen domains.", icon: "Atom" },
    { title: "Data Science & IoT Systems", desc: "Industrial IoT predictive maintenance, smart healthcare delivery, and sensor telemetry.", icon: "Database" }
  ],

  featuredProjects: [
    {
      id: "01",
      title: "OsteoNet: Explainable Attention-Driven ConvNeXt for Osteoporosis Detection",
      domain: "Medical Imaging & Explainable AI",
      category: "Computer Vision",
      year: "2024-2025",
      impact: "Clinical-grade automated screening with gradient attention heatmaps from conventional radiographs.",
      description: "Developed an explainable deep learning pipeline leveraging ConvNeXt architecture and spatial attention mechanisms to identify early-stage bone mineral density loss and osteoporosis from standard radiographic scans.",
      tags: ["ConvNeXt", "Attention Mechanism", "Radiography", "Explainable AI (XAI)"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=900",
      stats: { metric: "Accuracy", value: "98.4%", badge: "High Diagnostic Precision" },
      highlight: "Enables clinicians to interpret model confidence through visual saliency maps."
    },
    {
      id: "02",
      title: "Advanced Brain Tumor Classification with UNet & Deep Maxout Classifiers",
      domain: "Healthcare Informatics",
      category: "Deep Learning",
      year: "2025",
      impact: "Presented at Int. Conf. on Network Security & Blockchain Technology (pp. 337–351).",
      description: "Engineered a two-phase neuro-oncology framework integrating UNet segmentation to delineate pathological tissue boundaries followed by Deep Maxout activation networks to classify glioma, meningioma, and pituitary tumors.",
      tags: ["UNet Segmentation", "Deep Maxout", "MRI Neuro-Imaging", "Transfer Learning"],
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=900",
      stats: { metric: "Dice Score", value: "0.942", badge: "Peer-Reviewed 2025" },
      highlight: "Overcomes vanishing gradient constraints using piecewise linear Maxout activations."
    },
    {
      id: "03",
      title: "Cloud-Based Network Security with Threat Intelligence Integration",
      domain: "Patented Innovation",
      category: "Cybersecurity",
      year: "2024",
      impact: "Official Indian Patent (App No. 202441061967, Published Aug 2024).",
      description: "Patented architecture delivering proactive threat detection and real-time perimeter defense by synthesizing distributed telemetry with machine-learned threat intelligence feeds across hybrid cloud ecosystems.",
      tags: ["Cloud Security", "Threat Intelligence", "Zero-Trust", "Indian Patent"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=900",
      stats: { metric: "Patent Status", value: "Published", badge: "App No: 202441061967" },
      highlight: "Automates heuristic rule adaptation to thwart zero-day distributed attacks."
    },
    {
      id: "04",
      title: "Object Detection Engine: Faster R-CNN & Interactive Streamlit Dashboard",
      domain: "Applied Computer Vision",
      category: "Computer Vision",
      year: "2024",
      impact: "Published in Novyi Mir Research Journal, 9(8), pp. 245–249.",
      description: "Constructed an end-to-end computer vision pipeline deploying region proposal networks (RPN) paired with an interactive Streamlit graphical dashboard for real-time inference and boundary calibration.",
      tags: ["Faster R-CNN", "Streamlit", "Object Detection", "Real-Time Inference"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=900",
      stats: { metric: "Inference Speed", value: "32 FPS", badge: "Published Research" },
      highlight: "Enables researchers and students to tweak anchor box scales dynamically via web UI."
    }
  ],

  patent: {
    title: "Cloud-Based Network Security Solution with Advanced Threat Intelligence Integration",
    applicationNumber: "202441061967",
    jurisdiction: "Indian Patent Office",
    filedDate: "15 August 2024",
    publishedDate: "23 August 2024",
    status: "Published",
    inventor: "Mr. Devadi Ganesh",
    abstract: "A comprehensive cloud-native network security system that integrates real-time telemetry analytics with multi-tiered threat intelligence algorithms. The framework identifies anomalous traffic patterns, automates containment actions across distributed infrastructure, and mitigates unauthorized lateral movement within enterprise cloud environments.",
    keyFeatures: [
      "Real-time telemetry ingestion and streaming anomaly detection",
      "Dynamic policy enforcement powered by intelligent threat correlation",
      "Decentralized defense mechanisms resistant to distributed DDoS vectors",
      "Minimal latency overhead for enterprise-scale hybrid cloud pipelines"
    ]
  },

  publications: [
    {
      id: 1,
      title: "Multimodal Content Analysis and Classification Approach (MCACA)",
      journal: "Journal of Electrical Systems",
      volume: "20(10s)",
      year: 2024,
      pages: "3821–3827",
      category: "AI & Machine Learning",
      tags: ["Multimodal Learning", "Feature Fusion", "Content Classification"],
      abstract: "Proposes the MCACA framework combining heterogeneous textual and visual representations through cross-attention fusion, outperforming unimodal baselines across benchmark classification datasets."
    },
    {
      id: 2,
      title: "Unleashing the Power of Object Detection: A Deeper Look at Faster R-CNN and Streamlit Dashboard",
      journal: "Novyi Mir Research Journal",
      volume: "9(8)",
      year: 2024,
      pages: "245–249",
      category: "Computer Vision",
      tags: ["Faster R-CNN", "Streamlit", "Object Detection", "GUI Analytics"],
      abstract: "Explores two-stage object detectors using Region Proposal Networks (RPN) integrated with an interactive Streamlit visual cockpit for live model introspection."
    },
    {
      id: 3,
      title: "Advanced Diabetic Retinopathy Imaging: Image Quality Enhancement and DR Grading",
      journal: "International Journal of Progressive Research in Engineering Management and Science (IJPREMS)",
      volume: "Recent Volume",
      year: 2024,
      pages: "Peer-Reviewed",
      category: "Medical Imaging",
      tags: ["Diabetic Retinopathy", "Retinal Fundus", "Quality Enhancement", "Automated Grading"],
      abstract: "Develops adaptive histogram equalization and deep feature extraction pipelines to accurately grade microaneurysms, hemorrhages, and exudates in fundus imaging."
    },
    {
      id: 4,
      title: "Classification and Detection of Deforestation Patterns Using Deep Learning Techniques",
      journal: "Novyi Mir Research Journal",
      volume: "10(4)",
      year: 2025,
      pages: "36–44",
      category: "AI & Machine Learning",
      tags: ["Satellite Imagery", "Deforestation", "Environmental AI", "CNN"],
      abstract: "Applies deep convolutional feature extractors on multi-spectral satellite imagery to identify illegal logging corridors and deforestation trends with high temporal fidelity."
    },
    {
      id: 5,
      title: "Deep Learning Driven IoT Enabled Smart Drug Delivery Systems for Personalized Therapy",
      journal: "Research Journal of Healthcare Technologies",
      volume: "Published / Presented",
      year: 2024,
      pages: "Special Issue",
      category: "IoT & Healthcare",
      tags: ["IoT", "Drug Delivery", "Personalized Medicine", "Deep Learning"],
      abstract: "Introduces closed-loop smart drug delivery architecture where patient physiological metrics trigger algorithmic dosage calibration via microcontroller actuators."
    },
    {
      id: 6,
      title: "OsteoNet: An Explainable Attention-Driven ConvNeXt Model for Robust Osteoporosis Detection from Radiographs",
      journal: "Journal of Medical Imaging & Intelligent Diagnostics",
      volume: "Advance Article",
      year: 2025,
      pages: "Peer-Reviewed",
      category: "Medical Imaging",
      tags: ["OsteoNet", "ConvNeXt", "Attention Mechanism", "Explainable AI"],
      abstract: "An explainable attention-augmented ConvNeXt network designed to capture subtle trabecular microarchitectural variations in plain bone radiographs."
    },
    {
      id: 7,
      title: "Forecasting Model Based on Ensembled Technique for Optimized Utilization of Resources on Multiple Datasets",
      journal: "AIP Conference Proceedings",
      volume: "Vol. 3298(1)",
      year: 2025,
      pages: "Art. 020052",
      category: "AI & Machine Learning",
      tags: ["Ensemble Learning", "Resource Optimization", "Forecasting", "AIP Proceedings"],
      abstract: "Demonstrates an ensemble predictive methodology combining gradient boosting and recurrent models to optimize resource scheduling across heterogeneous workloads."
    },
    {
      id: 8,
      title: "Advanced Brain Tumor Classification with UNet Segmentation and Deep Maxout Classifier Techniques",
      journal: "International Conference on Network Security and Blockchain Technology",
      volume: "Proceedings",
      year: 2025,
      pages: "pp. 337–351",
      category: "Medical Imaging",
      tags: ["Brain Tumor", "UNet Segmentation", "Maxout Classifier", "MRI"],
      abstract: "Presents a dual-stage neuroimaging diagnosis framework using UNet semantic boundary segmentation followed by deep Maxout classifier networks."
    },
    {
      id: 9,
      title: "EXB_RNN: A Hybrid Ensemble Approach for Enhanced Aspect-Based Sentiment Analysis",
      journal: "International Conference on Computational Intelligence in Pattern Recognition (CIPR)",
      volume: "CIPR 2024 Proceedings",
      year: 2024,
      pages: "Presented & Published",
      category: "NLP & Sentiment Analysis",
      tags: ["EXB_RNN", "Ensemble RNN", "Aspect-Based Sentiment", "NLP"],
      abstract: "Combines recurrent sequence models with ensemble boosting strategies to parse context-dependent sentiment polarity for specific entity aspects."
    },
    {
      id: 10,
      title: "Fusion Data Driven Lung Disease Classification with Transfer Learning and Textural Feature Analysis",
      journal: "Journal of Biomedical Informatics & AI",
      volume: "Published Edition",
      year: 2024,
      pages: "Peer-Reviewed",
      category: "Medical Imaging",
      tags: ["Lung Disease", "Transfer Learning", "Textural Analysis", "Chest X-Ray"],
      abstract: "Integrates deep transfer learning representations with Haralick gray-level co-occurrence matrix (GLCM) textural descriptors for reliable thoracic disease triage."
    },
    {
      id: 11,
      title: "Accelerated Password Security Analysis through a Hybrid Multithreaded Framework",
      journal: "International Journal of Research Publication and Reviews (IJPRR)",
      volume: "6(5)",
      year: 2025,
      pages: "May 2025",
      category: "Cybersecurity",
      tags: ["Password Security", "Multithreaded", "Entropy Analysis", "Cryptography"],
      abstract: "Builds a high-concurrency analytical engine evaluating cryptographic entropy, rainbow hash vulnerabilities, and dictionary attack resistance across millions of credentials."
    }
  ],

  conferences: [
    {
      conference: "ICAMSD 2025",
      name: "International Conference on Artificial Intelligence and Machine Learning for Sustainable Development",
      topic: "AI-Driven Environmental Monitoring and Predictive Intelligence",
      role: "Presented Research Paper",
      year: "2025"
    },
    {
      conference: "CIPR 2024",
      name: "6th International Conference on Computational Intelligence in Pattern Recognition",
      topic: "EXB_RNN: A Hybrid Ensemble Approach for Enhanced Aspect-Based Sentiment Analysis",
      role: "Presented Research Paper",
      year: "2024"
    },
    {
      conference: "ICRERA 2024",
      name: "International Conference on Renewable Energy Resources and Applications",
      topic: "Predictive Maintenance in Industry 4.0 Using Hybrid Machine Learning and Fuzzy Logic Models",
      role: "Presented Research Paper",
      year: "2024"
    },
    {
      conference: "ICNSBT 2025",
      name: "International Conference on Network Security and Blockchain Technology",
      topic: "Advanced Brain Tumor Classification with UNet Segmentation and Deep Maxout Classifier Techniques (pp. 337–351)",
      role: "Co-Authored Proceedings Paper",
      year: "2025"
    },
    {
      conference: "AIP 2025",
      name: "AIP Conference Proceedings (Vol. 3298)",
      topic: "Forecasting Model Based on Ensembled Technique for Optimized Utilization of Resources on Multiple Datasets (Art. 020052)",
      role: "Co-Authored Proceedings Paper",
      year: "2025"
    }
  ],

  fdps: [
    { title: "Quantum Computing and Its Applications in Recent Domains", org: "AICTE ATAL Faculty Development Programme — South Asian University", type: "ATAL FDP", year: "Recent" },
    { title: "High-Performance and Intelligent Computing for Next-Gen Communications & Smart Environments", org: "IIIT Guwahati", type: "National FDP", year: "Recent" },
    { title: "Role of Artificial Intelligence and Machine Learning in Smart Grids", org: "IIT Patna", type: "IIT FDP", year: "Recent" },
    { title: "Next-Gen Electronics and Communication Systems: Empowered by ML and AI", org: "NIT Kurukshetra", type: "NIT FDP", year: "Recent" },
    { title: "Google Gemini Academy 2025", org: "Google", type: "Global Certification", year: "2025" },
    { title: "Building Robust Security and Privacy Models", org: "Andhra University / ISEA Phase III", type: "Govt / University", year: "Recent" },
    { title: "Programming in Java (12-Week Course, 60-Hour Certification)", org: "NPTEL FDP", type: "NPTEL Elite FDP", year: "Recent" },
    { title: "Strong Foundation in Data Science: Principles and Techniques", org: "SR University", type: "University Workshop", year: "Recent" },
    { title: "Data Science and Machine Learning Applications for Engineering & Sciences", org: "National Level Workshop", type: "Workshop", year: "Recent" },
    { title: "Integration of IoT & Blockchain to Implement Smart Education and Healthcare", org: "Faculty Training Programme", type: "FDP", year: "Recent" },
    { title: "Classroom Deliverables, Question Paper Setting, and Assessment", org: "GMRIT", type: "Pedagogy Training", year: "Recent" },
    { title: "Introduction to Internet of Things", org: "NPTEL", type: "Certification", year: "Recent" }
  ],

  academics: [
    {
      degree: "Ph.D. in Computer Science and Engineering",
      institution: "SR University, Warangal, Telangana",
      status: "Pursuing",
      highlight: "Advanced Research in Deep Learning, Computer Vision & Explainable AI",
      period: "Current"
    },
    {
      degree: "M.Tech in Computer Science and Technology",
      institution: "Andhra University",
      status: "Completed",
      highlight: "Distinction in Advanced Algorithms & Distributed Architecture",
      period: "Completed"
    },
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Sri Venkateshwaraa College of Engineering and Technology",
      status: "Completed",
      highlight: "Foundational Excellence in Systems & Software Engineering",
      period: "Completed"
    }
  ],

  responsibilities: [
    { role: "Coursera Department Coordinator", scope: "Department of Computer Science & Engineering, GMRIT", desc: "Overseeing student upskilling, curated course pathways, and digital learning certifications." },
    { role: "Online Courses & Workshops Coordinator", scope: "Student Engagement & Development", desc: "Mentoring and mobilizing students for national/international technical hackathons and MOOCs." },
    { role: "NAAC Coordination & Documentation", scope: "Institutional Accreditation", desc: "Leading compliance verification, academic documentation, and quality assurance metrics." }
  ],

  sports: [
    { title: "Winner — Cricket Tournament", event: "GMRIT Sports Day 2024", team: "CSE Department Faculty Team", icon: "Trophy" },
    { title: "Runner-Up — Badminton", event: "GMRIT Sports Day 2024", team: "Faculty Singles & Doubles", icon: "Medal" },
    { title: "Runner-Up — Running & Carrom", event: "GMRIT Sports Day 2024", team: "Athletics & Indoor Games", icon: "Award" }
  ]
};
