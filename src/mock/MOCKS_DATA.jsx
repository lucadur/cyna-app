// src/data/mocks.js

import edr from "../assets/images/edr.jpg";
import placeholder3 from "../assets/images/identity.jpg";
import placeholder from "../assets/images/siem.jpg";
import soc from "../assets/images/soc.jpg";
import socPremium from "../assets/images/socPremium.jpg";
import placeholder2 from "../assets/images/technology.jpg";
import xdr from "../assets/images/xdr.jpg";

export const MOCK_Categories = [
  {
    id: 1,
    name: "SOC & SIEM",
    url: "1",
    imageUrl: placeholder,
    description:
      "Le SOC (Security Operations Center) fonctionne en synergie avec le SIEM (Security Information and Event Management) pour surveiller, détecter et répondre aux incidents de sécurité.",
    services: [1, 2], // Référence vers les services
  },
  {
    id: 2,
    name: "EDR & XDR",
    url: "2",
    imageUrl: placeholder2,
    description:
      "Les solutions EDR (Endpoint Detection and Response) et XDR (Extended Detection and Response) offrent une protection proactive contre les menaces avancées.",
    services: [3, 4],
  },
  {
    id: 3,
    name: "CYNA SOC",
    url: "3",
    imageUrl: placeholder3,
    description:
      "Le CYNA SOC est une solution de sécurité de nouvelle génération basée sur une architecture cloud-native.",
    services: [5, 6],
  },
];

export const MOCK_Services = [
  {
    id: 1,
    name: "SOC Standard",
    categoryId: 1,
    imageUrl: soc,
    description:
      "Service de surveillance continue et de réponse aux incidents en temps réel.",
    available: false,
    defaultPricing: 1,
    pricingIds: [1, 2, 3], // Référence vers les modèles de pricing
    keyCharacteristics: {
      performance: "Moyenne",
      scalability: "Standard",
      support: "24/7",
    },
    similar: [2, 5], // SOC Premium & CYNA SOC Standard
  },
  {
    id: 2,
    name: "SOC Premium",
    categoryId: 1,
    imageUrl: socPremium,
    description:
      "Version avancée du SOC avec des analyses approfondies et réponse automatisée.",
    available: true,
    defaultPricing: 1,
    pricingIds: [1, 2, 5],
    keyCharacteristics: {
      performance: "Élevée",
      scalability: "Haute",
      support: "Premium 24/7",
    },
    similar: [1, 6], // SOC Standard & CYNA SOC Entreprise
  },
  {
    id: 3,
    name: "EDR Protection",
    categoryId: 2,
    imageUrl: edr,
    description: "Détection et réponse aux menaces ciblant les terminaux.",
    available: false,
    defaultPricing: 1,
    pricingIds: [1, 2, 3],
    keyCharacteristics: {
      performance: "Élevée",
      scalability: "Standard",
      support: "Standard",
    },
    similar: [4, 5], // XDR Advanced & CYNA SOC Standard
  },
  {
    id: 4,
    name: "XDR Advanced",
    categoryId: 2,
    imageUrl: xdr,
    description:
      "Gestion centralisée des menaces sur l’ensemble des environnements.",
    available: true,
    defaultPricing: 1,
    pricingIds: [1, 2, 4, 5],
    keyCharacteristics: {
      performance: "Très élevée",
      scalability: "Élastique",
      support: "Premium 24/7",
    },
    similar: [3, 6], // EDR Protection & CYNA SOC Entreprise
  },
  {
    id: 5,
    name: "CYNA SOC Standard",
    categoryId: 3,
    imageUrl: placeholder2,
    description: "Surveillance de sécurité cloud-native avec support 24/7.",
    available: true,
    defaultPricing: 1,
    pricingIds: [1, 2],
    keyCharacteristics: {
      performance: "Élevée",
      scalability: "Cloud-native",
      support: "24/7",
    },
    similar: [1, 3], // SOC Standard & EDR Protection
  },
  {
    id: 6,
    name: "CYNA SOC Entreprise",
    categoryId: 3,
    imageUrl: placeholder3,
    description:
      "Solution SOC dédiée aux grandes entreprises, avec personnalisation avancée.",
    available: true,
    defaultPricing: 5,
    pricingIds: [5], // Uniquement sur devis
    keyCharacteristics: {
      performance: "Optimisée pour les grandes entreprises",
      scalability: "Personnalisable",
      support: "Support dédié",
    },
    similar: [2, 4], // SOC Premium & XDR Advanced
  },
];

export const MOCK_PricingOptions = [
  {
    id: 1,
    name: "Mensuel",
    price: 29.99,
    available: true,
    description: "Paiement mensuel pour une flexibilité maximale.",
  },
  {
    id: 2,
    name: "Annuel",
    price: 299.99,
    available: true,
    description: "Économisez 20% en payant annuellement.",
  },
  {
    id: 3,
    name: "Par utilisateur",
    price: 9.99,
    available: true,
    description: "Tarification adaptée aux équipes de toutes tailles.",
  },
  {
    id: 4,
    name: "Par appareil",
    price: 14.99,
    available: false,
    description: "Tarification par appareil utilisé.",
  },
  {
    id: 5,
    name: "Entreprise",
    price: "Sur demande",
    available: true,
    description: "Tarification flexible pour les grandes entreprises.",
  },
];
