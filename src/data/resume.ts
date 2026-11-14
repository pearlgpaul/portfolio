/**
 * All resume content lives in this file. Edit the text here; the layout is in
 * src/pages/index.astro and src/components/.
 *
 * Inline formatting inside strings:
 *   **bold**   *italic*   [link text](https://example.com)
 */

export interface Role {
  title: string;
  organisation: string;
  start: string;
  end: string;
  location: string;
  /** Bullets with no sub-heading. */
  highlights?: string[];
  /** Bullets grouped under a sub-heading (e.g. rotations within one role). */
  streams?: { name: string; highlights: string[] }[];
}

export const person = {
  name: 'Pearl Pulikkottil',
  givenName: 'Pearl',
  familyName: 'Pulikkottil',
  title: 'Data Scientist & AI Engineer',
  shortLocation: 'Sydney, NSW',
  location: 'Sydney, NSW, Australia',
  email: 'pearl.gpaul@gmail.com',
  github: 'https://github.com/pearlgpaul',
};

export const profile =
  "Data Scientist at Commonwealth Bank of Australia with production experience across agentic AI, generative AI, RAG pipelines, LLM evaluation, and model governance. Delivered end-to-end ML and GenAI systems across cybersecurity, customer risk, and customer service domains. Published researcher (Springer LNNS, ICR'26). Comfortable across the full stack — from model design and prompt engineering through Docker containerisation, CI/CD deployment, and enterprise governance sign-off.";

export const experience: Role[] = [
  {
    title: 'Graduate Data Scientist — Rotational Program',
    organisation: 'Commonwealth Bank of Australia',
    start: 'Feb 2025',
    end: 'Present',
    location: 'Sydney, NSW',
    streams: [
      {
        name: 'Cybersecurity AI',
        highlights: [
          "Built a **RAG + few-shot LLM pipeline** for enterprise-scale cyber threat intelligence extraction, mapping adversary behaviours to MITRE ATT&CK techniques — part of CBA's publicly reported **TIARA** system ([ITNews, 2025](https://www.itnews.com.au/news/cba-builds-two-ai-agents-to-boost-cyber-defences-624356)). Expanded ATT&CK technique coverage from ~190 to 600+; **reduced false positives by 18%** via a multi-pass LLM validation layer",
          'Architected **AIDEN**, a generative AI system that automatically produces cyber deception campaigns by extracting attack chain narratives and mapping them to MITRE ATT&CK — supporting red team and threat hunting operations at enterprise scale.',
          'Benchmarked competing LLM-based threat intelligence pipelines (RAG vs. few-shot approaches) across precision, recall, and latency to inform production tooling decisions.',
          "Built and maintained production deployment pipelines for AI applications using **Docker**, **GitHub Actions CI/CD**, and AWS services on CBA's internal cloud platform (**DHP**), enabling faster delivery of new capabilities and rapid iteration based on analyst feedback.",
          'Improved analyst tooling and user experience for the **TIARA** platform based on direct cyber analyst feedback, reducing friction in interactive threat investigation workflows.',
        ],
      },
      {
        name: 'AI Model Risk, Validation & Governance',
        highlights: [
          'Validated an **agentic AI classification system** for automated Spam Act complaints triage, assessing model behaviour, decision traceability, and production readiness. Partnered with model owners, developers, and SMEs to identify governance gaps and deliver evidence supporting audit readiness and model approval.',
          'Led end-to-end **LLM evaluation and validation** of a reusable **guardrails-as-a-service (GaaS)** framework, benchmarking performance and conducting adversarial testing across jailbreaks, prompt injection, and real-world scenarios to assess safety, robustness, and production readiness.',
          'Reviewed the **monitoring and governance framework** for an enterprise LLM guardrails system, identifying improvements to monitoring, drift detection, observability, and model risk controls to strengthen production governance.',
        ],
      },
      {
        name: 'Customer Service — Agent Assist (GenAI)',
        highlights: [
          'Optimised **GenAI-powered agent assist capabilities** within Microsoft Dynamics 365 Customer Service (CCaaS), including real-time Q&A, conversation summarisation, and intent recognition. Applied iterative prompt engineering, LOB-specific testing, and structured **LLM-as-a-judge evaluation pipelines** in collaboration with SMEs to evaluate response quality, factual accuracy, and task completion performance across customer service scenarios.',
          'Designed and configured **agentic intent recognition workflows** for home loan pre-qualification use cases, enabling consistent classification of customer intent within regulated lending workflows. Engaged with Microsoft product engineers to identify platform capability gaps and drive extensibility improvements, ensuring alignment with bank-specific regulatory, compliance, and audit requirements including traceability, explainability, and policy adherence.',
          'Collaborated with **Microsoft engineers** to improve GenAI conversation summarisation through prompt optimisation, structured **LLM-as-a-judge evaluation**, and workflow automation, producing more complete, consistent, and audit-ready summaries for customer service operations.',
          'Converted undocumented operational procedures and SME knowledge into structured **AI-ready knowledge assets**, improving retrieval quality and response accuracy for GenAI-powered agent assist capabilities.',
        ],
      },
    ],
  },
  {
    title: 'UPIP Intern — Data & Analytics, (Fraud Control & Behavioural Insights)',
    organisation: 'Australian Taxation Office',
    start: 'Sep 2023',
    end: 'Oct 2024',
    location: 'Sydney, NSW',
    highlights: [
      'Built an automated near real-time analytics reporting tool in **R** to support fraud and financial crime detection decision-making, enabling faster identification of suspicious behavioural patterns and operational risk signals. Iteratively refined requirements through stakeholder presentations, feedback cycles, and alignment with investigative team needs.',
      'Collaborated on **machine learning model development** for fraud and behavioural risk detection, supporting feature exploration, data preparation, and performance evaluation. Applied **graph-based analytics using TigerGraph** to model and analyse complex entity relationships, enabling deeper network-level insights into potentially coordinated or anomalous activity.',
    ],
  },
  {
    title: 'Summer Vacationer Intern — Forensic Discovery',
    organisation: 'Deloitte Australia',
    start: 'Nov 2022',
    end: 'Feb 2023',
    location: 'Sydney, NSW',
    highlights: [
      'Created ML document classification models using **LayoutLM** for automated eDiscovery workflows.',
      'Managed large-scale legal datasets; used forensic software to preserve and analyse electronic evidence.',
    ],
  },
];

/** Short keyword groups (shown as tags). */
export const expertise: { name: string; items: string[] }[] = [
  {
    name: 'GenAI & LLM',
    items: [
      'Agentic AI',
      'RAG',
      'LLM Evaluation',
      'Prompt Engineering',
      'Few-Shot Learning',
      'LLM-as-Judge',
      'FAISS',
      'ChromaDB',
      'LangChain',
      'LangGraph',
      'AWS Bedrock',
      'HuggingFace',
      'AI Engineering',
      'Microsoft Copilot Studio',
      'OpenAI SDK',
    ],
  },
  {
    name: 'Languages & Tools',
    items: [
      'Python',
      'R',
      'Java',
      'SQL',
      'MongoDB',
      'Cypher',
      'Docker',
      'GitHub Actions',
      'AWS S3',
      'SageMaker',
      'Streamlit',
      'Claude Code',
      'DHP',
    ],
  },
  {
    name: 'Domain',
    items: [
      'Model Risk Management (MRM)',
      'Model Validation',
      'Fraud Analytics',
      'Retail Banking Operations',
      'Customer Service Analytics',
      'MS Dynamics 365',
      'MITRE ATT&CK',
      'Threat Intelligence',
      'Model Governance',
      'STIX 2.1',
    ],
  },
];

/** Full technical skills, by category. */
export const skills: { name: string; items: string }[] = [
  {
    name: 'AI Engineering & GenAI',
    items:
      'Agentic AI, Retrieval-Augmented Generation (RAG), LLM Evaluation, Prompt Engineering, Few-Shot Learning, LLM-as-Judge, LangChain, LangGraph, AWS Bedrock, OpenAI SDK, Hugging Face, FAISS, ChromaDB',
  },
  {
    name: 'Machine Learning & Analytics',
    items:
      'Machine Learning, Natural Language Processing (NLP), Statistical Analysis, Data Visualisation, Model Validation, Model Risk & Governance, SQL, MongoDB, neo4j Cypher, TigerGraph, H2O.ai, PowerBI, Tableau',
  },
  {
    name: 'Software Engineering & MLOps',
    items:
      'Python, R, Java, Docker, GitHub Actions, CI/CD, AWS (S3, CloudWatch, SageMaker), Streamlit, DHP, Git, VS Code, JupyterLab, Claude Code, OpenCode, GitHub Copilot, Cline',
  },
  {
    name: 'Cybersecurity & Enterprise Platforms',
    items:
      'MITRE ATT&CK, STIX 2.1, Threat Intelligence, Microsoft Dynamics 365 CCaaS, Jira, Confluence, MkDocs, Quarto, Obsidian',
  },
];

export const education = [
  {
    degree: 'B. Advanced Computing',
    institution: 'University of Sydney',
    years: '2020–2024',
    details: ['Computational Data Science (Major)', 'Statistics (Minor)'],
  },
];

export const publications = [
  {
    title:
      'Enhancing Mathematical Reasoning Education with Data-Driven Fine-Tuning of Large Language Models',
    authors: 'Anaissi, A., Liu, D., Pulikkottil, P., Akram, J. & Nawaz, M. (2026)',
    venue: '*Springer Lecture Notes in Networks and Systems (LNNS)* · Paper ID ICR6478',
    presented: "Presented at ICR'26, Berlin · Indexed: SCOPUS, DBLP, INSPEC, SCImago, zbMATH",
    /** Short form, from the previous site's sidebar. */
    short: { venue: "Springer LNNS · ICR'26", when: 'Berlin, August 2026', indexed: 'SCOPUS · DBLP · INSPEC' },
  },
];
