export interface Project {
	name: string;
	year: string;
	description: string;
	image: string;
	tags: string[];
	href: string;
}

export const projects: Project[] = [
	{ name: 'Watchback', year: '2026', image: 'watchback.png', href: 'https://github.com/ali-aman-burki/watchback', tags: ['Python', 'Desktop App', 'Backup'], description: 'A desktop backup app that mirrors files from one source folder to one or more destinations with version and snapshot support.' },
	{ name: 'Typify', year: '2025', image: 'typify.png', href: 'https://github.com/ali-aman-burki/typify', tags: ['Python'], description: 'A Python type inference tool. It performs static analysis to infer types of Python variables and functions.' },
	{ name: 'our.shop', year: '2024', image: 'our-shop.png', href: 'https://wybengar.myweb.cs.uwindsor.ca', tags: ['HTML', 'CSS', 'JavaScript', 'PHP'], description: 'An e-commerce Web Application which includes login-system and admin-access. Developed as a group project in university.' },
	{ name: 'B-Spline Simulator', year: '2024', image: 'b-spline.png', href: 'https://github.com/ali-aman-burki/b-spline-simulator', tags: ['C++', 'OpenGL'], description: 'A B-Spline Curve and Bezier Curve simulator written in C++ using legacy OpenGL.' },
	{ name: 'B-Spline Spring', year: '2024', image: 'spring.png', href: 'https://github.com/ali-aman-burki/b-spline-spring-simulator', tags: ['C++', 'OpenGL'], description: 'A 3D Spring simulator that simulates tension and compression of a spring.' },
	{ name: 'Personal Portfolio', year: '2024', image: 'portfolio.png', href: 'https://github.com/ali-aman-burki/portfolio-website', tags: ['HTML', 'CSS', 'JavaScript'], description: 'This is the first website that I built and published. Hope you like it!' },
	{ name: 'Maze Tankers', year: '2023', image: 'maze-tankers.png', href: 'https://github.com/ali-aman-burki/MazeTankers', tags: ['Java', 'OpenGL', 'Blender'], description: 'A 3D Multiplayer Game developed in Java as part of a group project in university, inspired by the popular 2D game TankTrouble.' },
	{ name: 'Terminal Rasterizer', year: '2023', image: 'console-renderer.png', href: 'https://github.com/ali-aman-burki/terminal-rasterizer', tags: ['C++'], description: 'A 3D Renderer written in C++ that runs in the Windows terminal.' },
	{ name: 'Orbit', year: '2021', image: 'orbit.png', href: 'https://github.com/ali-aman-burki/orbit', tags: ['Java', 'AWT'], description: 'Gravity simulator designed to emulate the principles of Classical Mechanics.' },
	{ name: 'Vexter', year: '2018', image: 'vexter.png', href: 'https://github.com/ali-aman-burki/vexter', tags: ['Java', 'AWT', 'Photoshop'], description: 'A 2D Game with procedural cave generation that I developed in high school using a custom rendering engine.' },
];
