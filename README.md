
During the development of this project, there were a few parts that couldn’t be completed due to time constraints.  
I’d like to highlight these areas for transparency and future improvement:

---

###  1. Tailwind Theme Configuration

- The **Tailwind theme** was **not customized or configured**.
- It’s considered **best practice** to define theme colors, spacing, and typography in the `tailwind.config.js` file.  
  This ensures **consistency** across components and simplifies collaboration when multiple developers are involved.

---

###  2. Filters

- Some filters such as **Category** and **Price** are **not fully implemented**.
- **Category** filters were skipped because API category names did not match properly.  
- **Price** filtering could be implemented using **query parameters**, but this was not required for the given assessment.

---

###  3. Components & Dummy Data

- Some components were **not fully designed** due to limited time.
- A few components were **unnecessary** because of the **dummy API data** and have been left minimal or unused.

---

###  4. Code Refactoring

- The code can be **further refactored** to improve structure and reusability across components.
- This was not prioritized due to the project’s time constraints, but is a clear area for improvement.

---

##  Getting Started

To run the project locally:

```bash
npm install
npm run dev
