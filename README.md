# 🚀 SAPOptimize - Landing Page Consultant SAP

Landing page professionnelle pour Cédric Charlier, consultant SAP & optimisation des stocks.

## ✨ Fonctionnalités

- **Design "Executive Professional"** - Palette Deep Navy + Action Green
- **Formulaire de contact fonctionnel** - Avec envoi d'emails via Resend
- **Bouton WhatsApp flottant** - Contact direct
- **100% Responsive** - Mobile-first design
- **SEO optimisé** - Meta tags, Open Graph
- **Animations fluides** - Effets au scroll et hover

## 🛠 Stack Technique

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Emails**: Resend
- **Déploiement**: Vercel

## 📦 Installation

```bash
# Cloner le repo
git clone <your-repo-url>
cd sap-consultant-vercel

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos valeurs

# Lancer en développement
npm run dev
```

## ⚙️ Configuration

### Variables d'environnement

Créez un fichier `.env.local` à la racine :

```env
# API Resend pour les emails
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Email de réception des formulaires
CONTACT_EMAIL=cedric@sapoptimize.be
```

### Obtenir une clé API Resend

1. Créez un compte sur [resend.com](https://resend.com)
2. Allez dans Settings > API Keys
3. Créez une nouvelle clé API
4. Copiez-la dans votre `.env.local`

### Configurer votre domaine email (optionnel mais recommandé)

Pour envoyer des emails depuis votre propre domaine :
1. Dans Resend, allez dans Domains
2. Ajoutez votre domaine (ex: sapoptimize.be)
3. Configurez les DNS comme indiqué
4. Modifiez le `from` dans `/app/api/contact/route.ts`

## 🚀 Déploiement sur Vercel

### Option 1: Via l'interface Vercel

1. Poussez votre code sur GitHub/GitLab
2. Connectez-vous à [vercel.com](https://vercel.com)
3. Cliquez "New Project"
4. Importez votre repository
5. Ajoutez les variables d'environnement :
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
6. Cliquez "Deploy"

### Option 2: Via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Ajouter les variables d'environnement
vercel env add RESEND_API_KEY
vercel env add CONTACT_EMAIL

# Déployer en production
vercel --prod
```

## 📁 Structure du Projet

```
sap-consultant-vercel/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # API endpoint formulaire
│   ├── globals.css           # Styles globaux + Tailwind
│   ├── layout.tsx            # Layout racine + SEO
│   └── page.tsx              # Page principale
├── components/
│   ├── Header.tsx            # Navigation sticky
│   ├── Hero.tsx              # Section héro
│   ├── ProblemSolution.tsx   # Défis vs Objectifs
│   ├── Services.tsx          # 3 piliers services
│   ├── About.tsx             # Section consultant
│   ├── Contact.tsx           # Formulaire + coordonnées
│   ├── Footer.tsx            # Pied de page
│   └── WhatsAppButton.tsx    # Bouton flottant
├── public/
│   └── cedric-charlier.jpg   # Photo consultant
├── .env.example              # Template variables env
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## 🖼 Ajouter votre photo

1. Placez votre photo dans `/public/cedric-charlier.jpg`
2. Taille recommandée : 800x1000px minimum
3. Format : JPG optimisé (< 200KB)

## 📱 Personnalisation

### Modifier le numéro WhatsApp

Dans `components/WhatsAppButton.tsx` :
```tsx
const phoneNumber = '32470000000' // Votre numéro
```

### Modifier les coordonnées

Dans `components/Contact.tsx` :
- Email: ligne avec `href="mailto:..."`
- Téléphone: ligne avec `href="tel:..."`

### Modifier les couleurs

Dans `tailwind.config.ts` :
```ts
colors: {
  navy: {
    DEFAULT: '#1e293b', // Couleur principale
  },
  action: {
    green: '#22c55e', // Couleur CTA
  },
}
```

## 📊 Analytics (optionnel)

Pour ajouter Google Analytics :

1. Ajoutez `NEXT_PUBLIC_GA_ID` dans vos variables d'environnement
2. Créez un composant Analytics et ajoutez-le au layout

## 🔒 Sécurité

- Les variables d'environnement sensibles ne sont jamais exposées côté client
- Validation des emails côté serveur
- Protection CSRF intégrée à Next.js

## 📄 License

Projet privé - Tous droits réservés © Cédric Charlier
