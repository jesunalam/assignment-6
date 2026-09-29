# FitLog - Ultimate Workout & Plan Tracker

A modern, responsive, and high-performance fitness web application built with Next.js App Router, Tailwind CSS, and DaisyUI. FitLog empowers users to explore exercises, track daily workout routines, monitor calculated calories and workout durations, and manage custom training plans seamlessly.

---

## 🛠️ Technologies Used

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Client & Server Components)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **Icons:** [Lucide React](https://lucide.react.dev/)
- **State Management:** React Context API
- **API Backend:** Cloudflare-hosted FitLog API (`/api/fitlog`)
- **Deployment:** [Vercel](https://vercel.com/)

---

## ✨ 5 Key Features

1. **Dynamic Exercise Library & API Integration:**
   Fetches dynamic workout data from a Cloudflare Worker API endpoint with fast caching to explore various lifts, equipment types, and estimated calories burned.

2. **Interactive "My Plan" Dashboard:**
   Offers dual-tab organization ("Today's Plan" and "Saved") to filter active routines, calculate real-time cumulative stats (total exercises, duration in minutes, and total calories), and remove finished lifts.

3. **Multi-Criteria Sorting System:**
   Enables instant sorting across workout lists by **Duration**, **Calories**, or **Rating** to help users prioritize their workouts based on immediate training goals.

4. **Dynamic Routing & Detail Views:**
   Provides dedicated `/workout/[id]` detail pages showcasing comprehensive instructions, targeted muscle groups, equipment requirements, and interactive status controls.

5. **Fully Responsive & Optimized UI/UX:**
   Crafted with a sleek dark-themed interface, custom layout badges, mobile-optimized navigation drawers, and non-blocking `loading.tsx` page transition states.