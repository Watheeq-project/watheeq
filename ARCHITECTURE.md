# Next.js 16 Feature-Based Architecture

## 📁 Complete Folder Structure

```
watheeq/
├── app/                              # Next.js App Router - ROUTING ONLY
│   ├── (auth)/                       # Route Group: Auth Layout Container
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Home page (/)
│   ├── loading.tsx                   # Global loading UI
│   ├── error.tsx                     # Global error UI
│   └── globals.css                   # Global styles ONLY
│
├── features/                         # BUSINESS LOGIC - Feature Modules
│   ├── auth/
│   │   ├── actions.ts                # Server Actions (Next.js)
│   │   ├── types.ts                  # TypeScript types
│   │   ├── utils.ts                  # Utility functions
│   │   ├── constants.ts              # Feature constants
│   │   ├── schemas.ts                # Validation schemas (Zod, etc.)
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   └── UserProfile.tsx
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   ├── services/
│   │   │   └── authService.ts
│   │   └── index.ts                  # Public API
│   │
│   │
│
├── shared/                           # SHARED CODE - Cross-Feature Utilities
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useDebounce.ts
│   │   └── index.ts
│   ├── utils/
│   │   ├── formatDate.ts
│   │   ├── formatCurrency.ts
│   │   └── index.ts
│   ├── constants/
│   │   ├── routes.ts
│   │   └── index.ts
│   └── types/
│       ├── common.ts
│       └── index.ts
│
├── lib/                              # INFRASTRUCTURE - External Integrations
│   ├── api/
│   │   ├── client.ts                 # API client setup
│   │   └── index.ts
│   ├── auth/
│   │   ├── config.ts                 # Auth provider config
│   │   └── index.ts
│   └── database/
│       ├── client.ts                 # Database client
│       └── index.ts
│
├── middleware.ts                     # Next.js middleware
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
└── package.json
```

---

## 🎯 Core Architecture Rules

### 1. App Router Rules (`app/`)

**✅ DO:**
- Only routing files: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`
- Import and render feature components
- Handle route metadata and params
- Define route structure

**❌ NEVER:**
- Write business logic
- Make API calls
- Import shared utilities directly
- Create duplicate global style folders
- Put components with logic here

**Example:**
```typescript
// app/(dashboard)/dashboard/products/page.tsx
import { ProductList } from '@/features/products';

export default function ProductsPage() {
  return <ProductList />;
}
```

### 2. Route Groups Rules

**Route Groups `(name)` are layout containers ONLY:**
- They do NOT appear in the URL
- They group routes that share a layout
- Use parentheses: `(dashboard)`, `(auth)`

**❌ WRONG:**
```
app/dashboard/dashboard/page.tsx  // Creates /dashboard/dashboard ❌
```

**✅ CORRECT:**
```
app/(dashboard)/dashboard/page.tsx  // Creates /dashboard ✅
app/(dashboard)/layout.tsx          // Layout for all dashboard routes
```

**Why Route Groups:**
- Share layouts without affecting URLs
- Organize routes logically
- Apply middleware/authentication to route groups

### 3. Dashboard Routing Rules

**All protected routes live under `(dashboard)`:**
- `(dashboard)/layout.tsx` = Sidebar/Header for all dashboard routes
- `(dashboard)/dashboard/page.tsx` = `/dashboard` (overview page)
- `(dashboard)/dashboard/products/page.tsx` = `/dashboard/products`
- `(dashboard)/dashboard/products/[id]/page.tsx` = `/dashboard/products/[id]`
- `(dashboard)/dashboard/users/page.tsx` = `/dashboard/users`

**URL Structure:**
- `/dashboard` → Overview
- `/dashboard/products` → Products list
- `/dashboard/products/123` → Product detail
- `/dashboard/users` → Users list

**Route Group Layout:**
```typescript
// app/(dashboard)/layout.tsx
export default function DashboardLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <Header />
      <main>{children}</main>
    </div>
  );
}
```

### 4. Feature-Based Architecture Rules

**Business logic lives inside `features/`:**

**Feature Structure (only include what's needed):**
```
features/auth/
├── actions.ts          # Server Actions (Next.js server mutations)
├── types.ts            # TypeScript types
├── utils.ts            # Utility functions
├── constants.ts        # Feature constants
├── schemas.ts          # Validation schemas (Zod, Yup, etc.)
├── components/         # Feature-specific UI components
├── hooks/              # Custom React hooks
├── services/           # API calls (client-side)
└── index.ts           # Public API (exports only)
```

**Feature Rules:**
- ✅ Each feature is fully isolated
- ✅ Features NEVER import from other features
- ✅ Each feature exposes public API via `index.ts`
- ✅ Server Actions belong to the feature (`actions.ts`)
- ✅ All feature code is self-contained

**❌ WRONG:**
```typescript
// features/products/index.ts
import { useAuth } from '@/features/auth'; // ❌ Feature importing feature
```

**✅ CORRECT:**
```typescript
// features/products/index.ts
// Import from shared, not other features
import { Button } from '@/shared/ui';
```

### 5. Shared Code Rules (`shared/`)

**`shared/` is ONLY for code used by 2+ features:**

**✅ DO:**
- UI components used by multiple features
- Hooks used by multiple features
- Utilities used by multiple features
- Constants used across app
- Common types

**❌ NEVER:**
- Business logic
- API calls
- Feature-specific code
- Code used by only one feature

**Rule of Thumb:**
- If only ONE feature uses it → Put it in that feature
- If TWO+ features use it → Put it in `shared/`

### 6. Infrastructure Rules (`lib/`)

**`lib/` is infrastructure ONLY:**

**✅ DO:**
- Database clients (Prisma, Drizzle, etc.)
- API client setup (Axios, Fetch wrappers)
- Auth providers (NextAuth, Clerk, etc.)
- Third-party service configuration

**❌ NEVER:**
- Server Actions (they belong in `features/`)
- Business logic
- UI components
- Feature-specific code

**Why Server Actions in Features:**
- Server Actions are business logic, not infrastructure
- They belong with the feature they serve
- Keeps feature code cohesive and testable

### 7. Styling Rules

**Global styles live in `app/globals.css` ONLY:**
- ✅ `app/globals.css` = Global styles
- ❌ No `styles/globals.css` folder
- ❌ No duplicate global style locations

**Tailwind CSS:**
- Configure in `tailwind.config.ts`
- Use utility classes in components
- Shared UI components use Tailwind

---

## 🔄 How Routing Connects to Features

### Pattern: Route → Feature Import

**Route files (`app/`)** are thin wrappers that:
1. Import the feature's public API
2. Render the feature component
3. Handle route-specific concerns (metadata, params)

**Example Flow:**

```
app/(dashboard)/dashboard/products/page.tsx
  ↓ imports
@/features/products (index.ts)
  ↓ exports
ProductList component
  ↓ uses
useProducts hook
  ↓ calls
productService OR actions.ts (Server Actions)
```

### Route Example:

```typescript
// app/(dashboard)/dashboard/products/page.tsx
import { ProductList } from '@/features/products';

export const metadata = {
  title: 'Products',
};

export default function ProductsPage() {
  return <ProductList />;
}
```

### Feature Public API Example:

```typescript
// features/products/index.ts
// Public API - only export what routes need
export { ProductList } from './components/ProductList';
export { useProducts } from './hooks/useProducts';
export { getProducts } from './actions'; // Server Action
export type { Product } from './types';
```

---

## 🚫 Common Mistakes to Avoid

### ❌ Mistake 1: Business Logic in `app/`

```typescript
// ❌ WRONG
// app/products/page.tsx
export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('/api/products').then(...); // ❌ API call in route
  }, []);
  
  return <div>{/* ... */}</div>;
}
```

```typescript
// ✅ CORRECT
// app/products/page.tsx
import { ProductList } from '@/features/products';

export default function ProductsPage() {
  return <ProductList />; // ✅ Route is thin wrapper
}
```

### ❌ Mistake 2: Duplicate Dashboard Paths

```
❌ WRONG:
app/dashboard/dashboard/page.tsx  // Creates /dashboard/dashboard

✅ CORRECT:
app/(dashboard)/dashboard/page.tsx  // Creates /dashboard
```

### ❌ Mistake 3: Server Actions in `lib/`

```
❌ WRONG:
lib/server-actions/auth.ts

✅ CORRECT:
features/auth/actions.ts
```

### ❌ Mistake 4: Features Importing Features

```typescript
// ❌ WRONG
// features/products/index.ts
import { useAuth } from '@/features/auth';

// ✅ CORRECT
// Use shared utilities or pass props/callbacks
// Or use events/state management for feature communication
```

### ❌ Mistake 5: Shared Code Used by One Feature

```
❌ WRONG:
shared/utils/productHelpers.ts  // Only products feature uses it

✅ CORRECT:
features/products/utils.ts  // Move to feature
```

### ❌ Mistake 6: Global Styles in Wrong Location

```
❌ WRONG:
styles/globals.css

✅ CORRECT:
app/globals.css
```

---

## 📋 File Naming Conventions

### Feature Files
- `actions.ts` = Server Actions
- `types.ts` = TypeScript types
- `utils.ts` = Utility functions
- `constants.ts` = Constants
- `schemas.ts` = Validation schemas
- `index.ts` = Public API exports

### Components
- PascalCase: `ProductCard.tsx`, `LoginForm.tsx`
- One component per file
- Co-located in feature's `components/` folder

### Hooks
- camelCase with `use` prefix: `useAuth.ts`, `useProducts.ts`
- Custom React hooks only

### Services
- camelCase with `Service` suffix: `authService.ts`
- Client-side API calls

---

## 🎨 Tech Stack Integration

### Next.js 16 App Router
- **Server Components by default** (no `'use client'` needed)
- **Client Components** marked with `'use client'` directive
- **Route Groups** `(name)` for layout organization
- **Server Actions** in `features/*/actions.ts`

### TypeScript
- Strict mode enabled
- Path aliases: `@/features/*`, `@/shared/*`, `@/lib/*`
- Types co-located with features

### Tailwind CSS
- Global styles in `app/globals.css`
- Utility classes in components
- Shared UI components use Tailwind

---

## 🚀 Why This Structure Scales

### 1. **Clear Separation of Concerns**
- **`app/`** = Routing (Next.js convention)
- **`features/`** = Business logic (our convention)
- **`shared/`** = Cross-cutting utilities
- **`lib/`** = Infrastructure

### 2. **Feature Isolation**
- Features are independent modules
- Can be developed, tested, and maintained separately
- Teams can own entire features
- Easy to find code (lives in the feature it belongs to)

### 3. **Route Groups for Organization**
- Share layouts without URL pollution
- Group protected routes together
- Apply middleware to route groups
- Clean URL structure

### 4. **Server Actions Co-location**
- Server Actions live with the feature they serve
- Business logic stays cohesive
- Easier to test and maintain

### 5. **Scalability Benefits**
- **Team Scalability**: Multiple teams work on different features
- **Code Scalability**: Easy to find and maintain code
- **Testing Scalability**: Features tested in isolation
- **Deployment Scalability**: Features can be code-split

---

## 🔍 Finding Code

**Question: "Where does login logic live?"**
→ `features/auth/`

**Question: "Where is the products page?"**
→ `app/(dashboard)/dashboard/products/page.tsx` (imports from `features/products`)

**Question: "Where are product Server Actions?"**
→ `features/products/actions.ts`

**Question: "Where is the Button component?"**
→ `shared/ui/Button.tsx`

**Question: "Where is the API client configured?"**
→ `lib/api/client.ts`

**Question: "Where are global styles?"**
→ `app/globals.css`

---

## 📊 Architecture Decision Record

### Why Feature-Based Over Page-Based?

**Page-based** (Next.js default):
- ❌ Business logic scattered across routes
- ❌ Hard to find related code
- ❌ Difficult to reuse across routes

**Feature-based** (This architecture):
- ✅ Related code lives together
- ✅ Easy to find and maintain
- ✅ Features reusable anywhere
- ✅ Scales to large teams

### Why Server Actions in Features?

**Server Actions in `lib/`:**
- ❌ Separates business logic from feature
- ❌ Hard to find feature's complete logic
- ❌ Breaks feature cohesion

**Server Actions in `features/`:**
- ✅ Business logic stays with feature
- ✅ Complete feature in one place
- ✅ Easier to test and maintain

### Why Route Groups?

**Without Route Groups:**
- ❌ Layout code duplicated
- ❌ Hard to group protected routes
- ❌ URL structure can be confusing

**With Route Groups:**
- ✅ Share layouts cleanly
- ✅ Group routes logically
- ✅ Clean URLs without layout pollution

---

This architecture enforces clear boundaries, prevents common mistakes, and scales from startup to enterprise while maintaining team autonomy and code quality.
