export interface Conference {
	acronym: string; // e.g. "ICPC 2026"
	name: string;
	location: string;
	dates: string;
}

export interface Publication {
	title: string;
	authors: string[];
	conference: Conference;
	track: string;
	type: string;
	abstract: string;
	pdf?: string;
	doi?: string;
}

export const myName = 'Ali Aman';

const scam: Conference = {
	acronym: 'SCAM 2026',
	name: '26th IEEE International Conference on Source Code Analysis and Manipulation',
	location: 'Benevento, Italy',
	dates: '14–15 Sep 2026',
};
const icsme: Conference = {
	acronym: 'ICSME 2026',
	name: '42nd IEEE International Conference on Software Maintenance and Evolution',
	location: 'Benevento, Italy',
	dates: '14–18 Sep 2026',
};
const icpc: Conference = {
	acronym: 'ICPC 2026',
	name: '34th IEEE/ACM International Conference on Program Comprehension',
	location: 'Rio de Janeiro, Brazil',
	dates: '12–13 Apr 2026',
};

// Grouped by year, newest first. Within a year, newest first as well.
export const publications: { year: number; items: Publication[] }[] = [
	{
		year: 2026,
		items: [
			{
				title: 'Detecting Argument-Swap Bugs Using Context-Enhanced Code Representations',
				authors: ['Subrata Das', 'Ali Aman', 'Muhammad Asaduzzaman', 'Kawser Wazed Nafi', 'Salimur Choudhury'],
				conference: scam,
				track: 'Research Track',
				type: 'Conference',
				abstract:
					'Detecting incorrectly ordered arguments in method calls usually relies on mapping calls to their definitions, which is hard in dynamically typed languages like Python. We present BugProbe, a learning-based approach that avoids this mapping by combining name-based similarity with local and argument-usage context. It is trained on 3.4 million synthetic examples from 132,739 Python files and evaluated on a new benchmark of 55 real-world argument-swap bugs. BugProbe achieves high accuracy and consistently outperforms a state-of-the-art baseline.',
				pdf: 'https://arxiv.org/pdf/2609.17844',
				doi: 'https://doi.org/10.48550/arXiv.2609.17844',
			},
			{
				title: 'Evaluating LLMs on Java Code Snippet Adaptation Using a Mutation-Injection Framework',
				authors: ['Ali Aman', 'Muhammad Asaduzzaman', 'Shaowei Wang', 'Chanchal K. Roy'],
				conference: icsme,
				track: 'Registered Reports Track',
				type: 'Conference',
				abstract:
					'Developers often copy code and adapt it to a new context, yet it is unclear how well LLMs can do this without explicit edit instructions. We study instruction-free adaptation of Java code fragments using a mutation-injection framework that applies a taxonomy of developer adaptation operators to well-tested open-source code. We ask which adaptation types are hardest, how performance scales with complexity, and how much surrounding context models need. Correctness is measured primarily through test-suite re-insertion.',
				pdf: 'https://arxiv.org/pdf/2606.28618',
				doi: 'https://doi.org/10.48550/arXiv.2606.28618',
			},
			{
				title: 'Typify: A Tool for Usage-driven Type Inference in Python',
				authors: ['Hassan Aman', 'Ali Aman', 'Muhammad Asaduzzaman', 'Shaowei Wang', 'Jessica Chen'],
				conference: icsme,
				track: 'Tool Demonstration Track',
				type: 'Tool Paper',
				abstract:
					"Static analysis tools struggle with Python's dynamic typing, especially in unannotated code, and existing type inference approaches need annotations or large training corpora. We present Typify, a lightweight, usage-driven inference engine that combines symbolic execution, fixpoint analysis and context-matching retrieval, with no training data. It ships as both a command-line tool and a VS Code extension. On ManyTypes4Py and Typilus it beats all static baselines and closely matches hybrid deep learning approaches while running about 10× faster.",
				// pdf / doi: not public yet
			},
			{
				title: 'Typify: A Lightweight Usage-driven Static Analyzer for Precise Python Type Inference',
				authors: ['Ali Aman', 'Muhammad Asaduzzaman', 'Shaowei Wang'],
				conference: icpc,
				track: 'Research Track',
				type: 'Conference',
				abstract:
					'Existing Python type inference tools depend on annotations or on deep learning models that need large training corpora. We introduce Typify, a lightweight static analysis engine that infers types from how code is used, combining symbolic execution, fixpoint analysis and context-matching retrieval across entire projects. Evaluated on ManyTypes4Py and Typilus, it matches or surpasses Type4Py, HiTyper and Pyre. This shows that usage-driven inference can rival data-driven methods while staying interpretable and efficient.',
				pdf: 'https://arxiv.org/pdf/2604.05067',
				doi: 'https://doi.org/10.1145/3794763.3794825',
			},
		],
	},
];
