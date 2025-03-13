![onnipfp-removebg-preview](https://github.com/user-attachments/assets/650a6bcb-1142-47c5-bf00-2bf8bfcbf6d2)

<br />

<div align="center">
  <strong>Onni</strong>  
  <em>Memecoin Paper Trading Platform with AI Coaching and a Funding Challenge</em>  
  <br /><br />
  Practice risk-free <strong>memecoin trading</strong>, refine your skills with our <strong>AI personal coach</strong>, and earn <strong>real funding</strong> once you prove consistent performance.
</div>

<br />

---

## Table of Contents

1. [Features](#features)  
2. [Architecture](#architecture)  
3. [Screenshots](#screenshots)  
4. [Installation](#installation)  
5. [Usage](#usage)  
6. [Environment Variables](#environment-variables)  
7. [Testing](#testing)  
8. [Contributing](#contributing)  
9. [License](#license)

---

## Features

- **Paper Trading for Memecoins**  
  Hone your skills in real-time market conditions—zero risk to your capital.

- **AI Personal Coach**  
  Our AI analyzes your trading behavior and suggests tweaks to improve your win rate.

- **Funding Challenge**  
  Hit performance targets to unlock real trading capital—keep a share of your profits.

- **Web, Mobile, and Microservices**  
  A monorepo with Next.js frontend, Node.js backend, React Native mobile, plus specialized microservices.

- **Robust Documentation**  
  Comprehensive guides, API references, and architecture diagrams in the `/docs` folder.

---

## Architecture


- **Frontend**: Renders the UI, communicates with backend services via REST/GraphQL.  
- **Backend**: Manages authentication, user data, trade logic, challenge states.  
- **Microservices**: Handles notifications, analytics, or specialized tasks for performance and scalability.  
- **Infrastructure**: Scripts and configs for CI/CD, containerization, and cloud deployment.

For more details, check out our [Architecture Overview](./docs/architecture-overview.md).


---

## Installation

1. **Clone the Repo**:
   ```bash
   git clone https://github.com/yourusername/onni.git
   cd onni
yarn install
# or
npm install

cd frontend
yarn dev

cd backend
yarn start


