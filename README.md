# AI Fashion Assistant

A TypeScript + React app (bundled with Vite) for an AI-assisted fashion experience. This project aims to provide a fast, modern web interface for exploring fashion ideas and building outfits with an AI-driven assistant.

Repository: [dkasun2001/AI-fashion-assistant](https://github.com/dkasun2001/AI-fashion-assistant)

## Features
- Modern React + TypeScript stack with Vite for fast dev and builds
- Modular structure with components, hooks, and services
- Typed domain models in `types.ts`

## Tech Stack
- TypeScript
- React
- Vite

## Getting Started

### Prerequisites
- Node.js 18+ (recommended)
- npm 9+ (or your preferred package manager)

### Installation
```bash
git clone https://github.com/dkasun2001/AI-fashion-assistant.git
cd AI-fashion-assistant
npm install
```

### Development
```bash
npm run dev
```
- Starts the local development server (Vite).
- Open the URL from your terminal output (commonly http://localhost:5173).

### Build
```bash
npm run build
```
- Produces a production build in the `dist/` folder.

### Preview (optional)
```bash
npm run preview
```
- Serves the production build locally (handy for final checks).

> Note: Script names follow common Vite conventions. Refer to the repository’s [package.json](./package.json) for the exact scripts configured.

## Project Structure

```
.
├─ .gitignore
├─ App.tsx
├─ index.html
├─ index.tsx
├─ package.json
├─ package-lock.json
├─ tsconfig.json
├─ vite.config.ts
├─ types.ts
├─ metadata.json
├─ components/
├─ data/
├─ hooks/
└─ services/
```

- `components/`: Reusable UI components
- `hooks/`: Custom React hooks
- `services/`: Data and API-related logic
- `data/`: Static or mock data
- `types.ts`: Shared TypeScript types
- `vite.config.ts`: Vite configuration

## Configuration

If the app requires environment variables (e.g., API keys), create a `.env` file in the project root and add variables prefixed with `VITE_`, for example:
```
GEMINI_API_KEY=
```

Then restart the dev server after editing `.env`.

## Scripts (reference)
- `dev`: Start development server
- `build`: Build for production
- `preview`: Preview the production build

Check [package.json](./package.json) for the authoritative list.

## Contributing
Contributions, issues, and feature requests are welcome!
- Fork the repo
- Create a feature branch
- Commit your changes
- Open a pull request

## License
No license file is present in this repository at the time of writing. Consider adding a license (e.g., MIT, Apache-2.0) if you plan to open source your work.

## Acknowledgments
- Built with [Vite](https://vitejs.dev/)
- Powered by [React](https://react.dev/)
- Typed with [TypeScript](https://www.typescriptlang.org/)
