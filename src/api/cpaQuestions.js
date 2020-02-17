var cpaQuestions = [
    {
        id: "start",
        question: "How Does the CCPA Apply to You?",
        buttons: [
            {
                label: "Are you a business?",
                target: "business"
            },
            {
                label: "Are you a service provider?",
                target: "service-provider"
            }
        ]
    },
    {
        id: "business",
        question: "For-profit legal entity?",
        buttons: [
            {
                label: "Yes",
                target: "personal-info"
            },
            {
                label: "No",
                target: "service-provider"
            }
        ]
    },
    {
        id: "personal-info",
        question: "Collect personal information of CA resident, or on the behalf of which personal information is collected",
        notes: "(e.g., name, email, IP address, device identifiers)",
        buttons: [
            {
                label: "Yes",
                target: "purpose-means"
            },
            {
                label: "No",
                target: "service-provider"
            }
        ]
    },
    {
        id: "purpose-means",
        question: "Determine (alone or jointly) purpose and means of the processing of CA resident PI",
        buttons: [
            {
                label: "Yes",
                target: "ca-business"
            },
            {
                label: "No",
                target: "service-provider"
            }
        ]
    },
    {
        id: "ca-business",
        question: "Do business in CA",
        buttons: [
            {
                label: "Yes",
                target: "revenue-size"
            },
            {
                label: "No",
                target: "service-provider"
            }
        ]
    },
    {
        id: "revenue-size",
        question: "Satisfy <u>one</u> of the following: <br />(A) Annual gross revenue > $25 million;<br />(B) Annually buy, receive, sell or share personal information of ≥ 50,000 CA residents; or <br />(C) ≥ 50% annual revenue comes from selling CA residents' personal information",
        buttons: [
            {
                label: "Yes",
                target: "resident-type"
            },
            {
                label: "No",
                target: "service-provider"
            }
        ]
    },
    {
        id: "resident-type",
        question: "What type of CA resident do you collect PI about?",
        buttons: [
            {
                label: "(A) B2B Contacts",
                target: "limited-ccpa"
            },
            {
                label: "(B) Employee/Applicant/Contractor/Owner/Officer/ Director/ Medical staff",
                target: "limited-ccpa"
            },
            {
                label: "(C) Traditional Consumer",
                target: "pi-use"
            }
        ]
    },
    {
        id: "pi-use",
        question: "What do you do with the PI that you collect?",
        buttons: [
            {
                label: "(A) Use PI internally only",
                target: "ccpa-baseline"
            },
            {
                label: "(B) Disclose PI for business purposes",
                target: "ccpa-baseline"
            },
            {
                label: "(C) Sell PI (Share for value)",
                target: "ccpa-heightened"
            }
        ]
    },
    {
        id: "service-provider",
        question: "For Profit legal entity",
        buttons: [
            {
                label: "Yes",
                target: "sp-personal-info"
            },
            {
                label: "No",
                target: "non-applicable"
            }
        ]
    },
    {
        id: "sp-personal-info",
        question: "Process personal information of CA resident on behalf of a business, per a written contract with specific data use limitations.",
        notes: "(e.g., name, email, IP address, device identifiers)",
        buttons: [
            {
                label: "Yes",
                target: "sp-ca-business"
            },
            {
                label: "No",
                target: "non-applicable"
            }
        ]
    },
    {
        id: "sp-ca-business",
        question: "Do business in CA",
        buttons: [
            {
                label: "Yes",
                target: "limited-ccpa"
            },
            {
                label: "No",
                target: "non-applicable"
            }
        ]
    },
    {
        id: "limited-ccpa",
        question: "Limited CCPA provisions may apply, but should consult with counsel."
    },
    {
        id: "non-applicable",
        question: "CCPA likely does not apply, but should confirm with counsel."
    },
    {
        id: "ccpa-baseline",
        question: "CCPA Baseline Applies"
    },
    {
        id: "ccpa-heightened",
        question: "CCPA Heightened Applies"
    }
];

export default cpaQuestions;
