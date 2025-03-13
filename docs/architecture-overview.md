# Architecture Overview

Onni is structured as a **monorepo** with two main components:

1. **Frontend (Next.js)**  
   - Pages are organized by feature (memecoin trading, AI coach, funding challenge, etc.).
   - The UI is styled with CSS modules and React components.

2. **Backend (Node/Express)**  
   - Handles authentication, user profiles, trades, challenges, and AI logic.
   - Connects to a NoSQL (MongoDB) or SQL (Postgres) database via models and services.
   - Provides RESTful APIs consumed by the frontend.

**Core Concepts:**
- **Paper Trading**: Virtual trades recorded in the database.
- **AI Personal Coach**: Exposes suggestions for trades or risk management.
- **Challenges**: Evaluate user performance over a specified timeframe.

This structure allows for clear separation of concerns and easier maintenance.
