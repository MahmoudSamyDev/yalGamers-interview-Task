# YalGamers - Clan Management Application

A modern clan management application built with React Router, featuring clan browsing, member management, and real-time interactions.

## Features

- **Clan Browser**: View and explore different gaming clans with detailed information
- **Clan Members**: Interactive member management with role indicators
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean, gaming-themed interface with glassmorphism effects
- **Modal Dialogs**: Smooth clan member viewing with Radix UI components

## Tech Stack

- **React 19** - Latest React with concurrent features
- **React Router 7** - Modern routing and SSR capabilities
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **FontAwesome** - Icon library
- **Vite** - Fast build tool and dev server

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/MahmoudSamyDev/yalGamers-interview-Task.git
cd yalgamers-task
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── Clans/          # Clan-related components
│   ├── Members/        # Member-related components
│   ├── UI/             # Generic UI components
│   └── Buttons/        # Button components
├── pages/              # Page components
│   └── Home/           # Home page sections
├── utils/              # Utilities and helpers
│   ├── data/           # Mock data
│   ├── models/         # TypeScript classes
│   └── Types.ts        # Type definitions
└── routes/             # React Router routes
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is part of an interview task for YalGamers.
