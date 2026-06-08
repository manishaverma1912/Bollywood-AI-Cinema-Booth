import {
  Theater,
  Clapperboard,
  Flame,
  Heart,
  Swords,
  Crown,
  GraduationCap,
  Rocket,
} from "lucide-react";

export const worlds = [
  {
    id: "bollywood",
    name: "Bollywood",
    tagline: "Dance. Drama. Destiny.",
    theme: "Vibrant Cinema",
    image: "https://img.sanishtech.com/u/f7409a6a41e0d072a8711fbc9b0b9ddd.png",
    color: "red",
    icon: Theater,
    categoriesCount: 4,
    categories: [
      {
        id: "action-hero",
        name: "Action Hero",
        description: "Blockbuster action, raw power, and iconic swag.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiYbiIvCq94YRgsnIpLV8sSs0BD6yCsLasxOuFff527qt7a-tLavkDyVeuEqM5ucbTEOF8-qYZ9YBC1maQKTer9neZISBcdXrKLIJyTpp79pyBJnOGPiSlpG6LpFUlrKp0ExeyivVHa2ToD9ZKE57cKwXv2Sana-bIRR5Xs0EPSPedxsPOjqDnPQC8XONdfXuDLNhmU17BxRt81bG6x9ZvgT0mrDk3lzRSjbx85tEy1Z0cgeFt2hBfgC8M462x6DiLB8vgI6_t-Ao",
        span: "col-span-12 md:col-span-8",
        isFeatured: true,
        badge: "FEATURED",
      },
      {
        id: "romantic-hero",
        name: "Romantic Hero",
        description: "Timeless love stories set to soulful melodies.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXLiVe4daMPIz13TlGNJ_vY3_I7Wbi2Fv9bMdFl1vtWu0RrP0WM79LDfwpNMXmdRkigwKt9ZRh7HtT7-jpXWAxLfVPZrKNsq3EWoDj_4weAhErbnWH4L9ORS5UF29oyR_WrbXGhGHgjGQykX8DmXj6UYGld6wn0eaTN11RT_KCh99rA1er0uDU-Xd9xe9pZejq9k_10Wshli5OQlBGdBjrS6-TovNMEdmIRJovdr8mMscOLHCAlFk1D9CCLUyNyu_NUCILCXF0g5s",
        badge: "CLASSIC",
      },
      {
        id: "police-crime",
        name: "Police & Crime",
        description: "Duty, justice, and the thin line between law and chaos.",
        span: "col-span-12 md:col-span-6",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfPXIsilkbuqHoPa3MlV1faN-ISz3lzxAdYcnR67eKhioPkhnB2-T49wD09pLQNn8f8H2hiKUxH2Lmpg0wzwF-CCcx58xAdkE3YPH5H5FDjuK3VgPl-ZtD62_yaCgO6hVHkeJkKmc2Pk_u_9npyBKQMh3Nemjl59B5SUM3PJhhbh8Fp6bvaHIY_GCOaC18azTIGhcjHKSVLBjE30zLWbDeAnI2jLy3C7FvM4QzzoiNJkDnmRnp9EJDznQOBSlaW5gLWABvcxovuBU",
        badge: "INTENSE",
      },
      {
        id: "music-superstar",
        name: "Music Superstar",
        description: "Stage lights, roaring crowds, and chart-topping anthems.",
        span: "col-span-12 md:col-span-6",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbDYOcdMJYf2wK0QAAbiM1p0CbhaGswtGQnxtZyGZbGsxPpzC_oJInZqEVTAUMKqaciRwcRgsOrAnethrDv5NEIBZkMdWvCFkRQ5q6UY69XL_5fAGW_u-f6mk_JxCOftnE1IIz01Q1Xzh1Qw9JdIghTwjbUIpnW1SeoNP8kkGP-IW1vHy2KAS_dAH9ypLLH0_pXPSGY_TMQT-Ci9oex71r35shoVyJ5JGHAKF5XtP6L0yoObAwuM0gbTHUc0U8UhYOk8Xfid5palc",
        badge: "TRENDING",
      }
      // {
      //   id: "bollywood-royalty",
      //   name: "Bollywood Royalty",
      //   description: "Opulent sets, grand sagas, and undeniable majesty.",
      //   span: "col-span-12 md:col-span-4",
      //   image: "/images/bollywood/bollywood-royalty/bollywood-royalty.jpg"
      // }
    ]
  },
  {
    id: "hollywood",
    name: "Hollywood",
    tagline: "Action. Sci-Fi. Blockbusters.",
    theme: "Epic Blockbusters",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8VviwQCkBzC6P-33512_M-joG1kOmfajcH8Y9JmA18_uQ6v5d1gK0DUGMV8oMswwkO317KFz6If6SsUIt0IFZic7GqNxhVYs8Unf_ldCTXZ8gBXTJtp-00aONFdOtVEko7V68Vichy-0T-aApm7LrqCbFTTQkKu1gRcXWYpodlK3H0vDVb5pSatKleNq6m9Cp14KOfTNMP8Vu6Ft81QlWDLpyr1uqGyKOWPdLvj2EFkGih6g6xJCaNOOjWKOuobLDVFovao2Ddno",
    color: "#f2ca50",
    icon: Clapperboard,
    categoriesCount: 5,
    categories: [
      {
        id: "action-hero",
        name: "Action Hero",
        description: "Precision. Speed. Impossible odds. The ultimate operative.",
        span: "col-span-12 md:col-span-8",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8VviwQCkBzC6P-33512_M-joG1kOmfajcH8Y9JmA18_uQ6v5d1gK0DUGMV8oMswwkO317KFz6If6SsUIt0IFZic7GqNxhVYs8Unf_ldCTXZ8gBXTJtp-00aONFdOtVEko7V68Vichy-0T-aApm7LrqCbFTTQkKu1gRcXWYpodlK3H0vDVb5pSatKleNq6m9Cp14KOfTNMP8Vu6Ft81QlWDLpyr1uqGyKOWPdLvj2EFkGih6g6xJCaNOOjWKOuobLDVFovao2Ddno",
        badge: "HOT CATEGORY",
        isFeatured: true,
      },
      {
        id: "superhero",
        name: "Superhero",
        description: "Unleash the power within. The world is watching.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiYc7zZDdk2eWEfRlCcVsm7qjqYyC7Kjcx0xjkyr2fKJbvkJN30PmPZrQtbNnmvcVx1o8BhggnXNd42RffmMU9xP7j3XrT4uNj4uqHo2SX4b215ysmrrTSdPTZAYg3Qxv-Zt0HVPm3Er46dOhpymBHV5TpTnYIKIKd-RcckKbygfnRH_6uWVY_5S-dMQISQmFAfIdomUCNfRFVYnAxXb5I-1OB8dXcx4IHTheE80GWDJhUAmSshzZ7x-SvTQgTgqSlXRbhTnI-OTw",
        badge: "LEGENDARY",
      },
      {
        id: "sci-fi-explorer",
        name: "Sci-Fi Explorer",
        description: "Beyond the horizon, where time is just a theory.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9djsetd-lbcF_KXxzGmfHkheomIm5XLgNlvrBnfF_9rJa4qANHg9fN2wL6bQoiT4J5K34PdW5mSKE4VdK6CnIVFMc-4AOG4VjVeS1NS-mo4OCDZM2ND5PtzQn-_ltWwZezuKDPvRqE14gB2KFfRDhqX1TqtjeKmZ6qkt_b1_fDiRPMswKYnNEGDGr4i6VMIGwJVtAvx0ppJAVSf-cznrnNY5zXx-3Qc6314OH_LMyK7eFQ2EhGIkUKyHVXETEUAHmhVvKTNBXcfg",
        badge: "EPIC",
      },
      {
        id: "detective-mystery",
        name: "Detective & Mystery",
        description: "The city has a thousand stories, and none of them are clean.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEozloN2Ag7ZHyWTaoE7_Y0IxdPCyLCZ0syobgQqJGjZCPIde9IjZaOqfQ42l1fcQm3ZKRiH10u3ODgIFaMHkiKxDPTcsVGTbH0C_weddXApObLZ2fM8nmcl44UyfdDQrprk1bTYIcoKfcan0K6PFp8JxSSRZk3Mt7v0ry6BRaLPMBzAD0kXGgsnthSMkrqpK9X-XMIVwwO0TYFk1ZQzBJbPgr_hxShE_YkPWCIWg3WLURHIz-CnKk4Ra6-g_USDCsV6GM3MbJaSk",
        badge: "THRILLER",
      },
      {
        id: "fantasy-adventure",
        name: "Fantasy & Adventure",
        description: "Honor, steel, and legends reborn across ancient worlds.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwEtzrVgy7MZnG943HLCnUY0FJ8wOJK0aLwVK0JLbNCh695da9XZDaoYxIO6z9rbr8PeSRG7x4tz8KLT_x6l0s8uMGc6xvzkfvOqDbbJnI1a7hbo6emCh1OwaHWn4CeRbuwxeRdfE2v7uSo5gq1Qe07Se9ZTr1hpeM8Ze-hUh3sSSDnDF1PmYJiC5HIRmy5MOqZvsPF64unsLYCCMbV-R9c3Xb13sxiGSC0oT4QsvZ1ZCRSLqKabypSa0QzftgAXMVRJZScT5jbNs",
        badge: "NEW ⭐",
      }
    ]
  },

  {
    id: "tollywood",
    name: "Tollywood",
    tagline: "Action. Emotion. Grandeur.",
    theme: "Mass Action",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBn3VcB2M59Oe_wMyTNETEFTQ86qzbZg-yL9k4aFTFkHwP6qVfq477TUTGSYsHTfpPiB7rn48kCcVo1szXHdgO0hu8gqcyr5k4MlmJ_8zZRJ07MkiaTjVAP17ZZtjrVtmfjJc4qqlCuuTAS4ErFqe_NIMSZvVSoCt-aEbHdjIFobdOFRdRw_uqdNY3MFP3wUm2ZYHmm5GYgqj5e-u3cprEj1EFWhrFa083nR7eRfjimmOcA2i-naGC74a4-pW-YeyJQIY_NviHXM34",
    color: "#e10111",
    icon: Flame,
    categoriesCount: 4,
    categories: [
      {
        id: "mass-action",
        name: "Mass Action",
        description: "High-octane heroics & gravity-defying spectacles.",
        span: "col-span-12 md:col-span-8",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiYbiIvCq94YRgsnIpLV8sSs0BD6yCsLasxOuFff527qt7a-tLavkDyVeuEqM5ucbTEOF8-qYZ9YBC1maQKTer9neZISBcdXrKLIJyTpp79pyBJnOGPiSlpG6LpFUlrKp0ExeyivVHa2ToD9ZKE57cKwXv2Sana-bIRR5Xs0EPSPedxsPOjqDnPQC8XONdfXuDLNhmU17BxRt81bG6x9ZvgT0mrDk3lzRSjbx85tEy1Z0cgeFt2hBfgC8M462x6DiLB8vgI6_t-Ao",
        badge: "PREMIERING NOW",
        isFeatured: true,
      },
      {
        id: "village-hero",
        name: "Village Hero",
        description: "Rugged, dusty landscapes and raw, grounded storytelling.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-mGDKhGaZDzZidFtoMTo7zMjfjMKd9KZ1smrdgmhD2v92G0uItyVRNJkDpM2x8hquyYgASWEZO9rqN03V2SqCpMAGL7_uNuN9eQK7b9sy4mocga-ID21xZb-7K3IWevzSp5sWA222Yi_iKeS69z9pPz-spG9xHHe_mbecErER5KQ5vPIvRxLWeGOil2IdxPXPsj2Gx3haF80_L0YDMYLamqN08k7cj5c3f7UkgE6BhkqVV-m_BpAviun_RK3hJwmGCA1eV2wJ7wU"
      },
      {
        id: "royal-warrior",
        name: "Royal Warrior",
        description: "Legends reborn in ancient Indian empires.",
        span: "col-span-12 md:col-span-6",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRoKZz9iaBHT3RcUrYojY58UICtca9q1pGAtv5mHMTgUgKsOszbxBYN8l1C2FV6UeKDX_iOQ8jtd0Ll9Bg3uwclZs6sFC8htMKPnbTAMUtMw80W11QnD1VC60K3ttzlbMG-zyIbHqk9OeKqPFtPj9s_tnW92YVK4NoSvwmcbs0ganQjNb6zys-ww2GEwZ_1iuObYJwafX_FVQw6Vfjt3x6yaXJ0fe0KWZFqFhfzifOQY9MQjspVN8x6d5DBX4dU3GujUCEg2Rqzfs"
      },
      {
        id: "police-power",
        name: "Police Power",
        description: "Fierce law enforcement and intense action.",
        span: "col-span-12 md:col-span-6",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBn3VcB2M59Oe_wMyTNETEFTQ86qzbZg-yL9k4aFTFkHwP6qVfq477TUTGSYsHTfpPiB7rn48kCcVo1szXHdgO0hu8gqcyr5k4MlmJ_8zZRJ07MkiaTjVAP17ZZtjrVtmfjJc4qqlCuuTAS4ErFqe_NIMSZvVSoCt-aEbHdjIFobdOFRdRw_uqdNY3MFP3wUm2ZYHmm5GYgqj5e-u3cprEj1EFWhrFa083nR7eRfjimmOcA2i-naGC74a4-pW-YeyJQIY_NviHXM34"
      },
      {
        id: "pan-india-star",
        name: "Pan India Star",
        description: "The face that united a nation across languages.",
        span: "col-span-12 md:col-span-12",
        image: "/images/tollywood/pan-india-star/pan-india-star.jpg"
      }
    ]
  },
  {
    id: "kdrama",
    name: "K-Drama",
    tagline: "Romance. Thriller. Drama.",
    theme: "Emotional Waves",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrfJWdSQRKNXzQ7bXNnhp-QHBYdsT_ZcXPMNb_LXjr6v5ERMWsakfYw2J19He1EvSlTfuxS34f_IPRAd_GkxIJwjZB3Ti7AiWw-oaKX0KCw2-hD2ohKuK4ZfCqVX_ctrSlfiBBfAbpSl_JfiNFAzwu8sXwdPbaxW5fOwuuvMib8MNHSarCv4_bVDKalKhfpQIIV8608LjvN9jsSDVd6B1KyvjNElZdLVaKgp_aeayzn0YUiF1WsP772yYIfJke06Qvo7xZXnQZ4Ww",
    color: "#ffb4aa", // Soft Pink/Coral
    icon: Heart,
    categoriesCount: 4,
    categories: [
      {
        id: "modern-romance",
        name: "Modern Romance",
        description: "Soulmates finding light in the heart of a neon metropolis.",
        span: "col-span-12 md:col-span-8",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrfJWdSQRKNXzQ7bXNnhp-QHBYdsT_ZcXPMNb_LXjr6v5ERMWsakfYw2J19He1EvSlTfuxS34f_IPRAd_GkxIJwjZB3Ti7AiWw-oaKX0KCw2-hD2ohKuK4ZfCqVX_ctrSlfiBBfAbpSl_JfiNFAzwu8sXwdPbaxW5fOwuuvMib8MNHSarCv4_bVDKalKhfpQIIV8608LjvN9jsSDVd6B1KyvjNElZdLVaKgp_aeayzn0YUiF1WsP772yYIfJke06Qvo7xZXnQZ4Ww",
        badge: "CHAPTER 01"
      },
      {
        id: "ceo-romance",
        name: "CEO Romance",
        description: "High stakes, luxury lifestyle, and undeniable chemistry.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOIQaZ0luljWtEYmwP953t-qL86UWLgJ7h74Sz9TWqcFrbO71ytggobsvMOgr--RMmtluULPKEth9en0SLJweT248jIqWEdA0BecxFztbqqAYbIadgPOqEhldeQCSt1fldnuUebJtJ-CI6gI02pEpV0FN2v2vyfQ2QqWwdCQJcg8NcOfb4Y0YXE3HRSsEzO6L6N-qFe2ShcJ5CuAgP6z535Es-RKwl_Cbu-1YiQjWWWdxzZcKu6Jo84vK3lai4QFOsnv21dInFyxQ"
      },
      {
        id: "medical-drama",
        name: "Medical Drama",
        description: "The delicate balance of heartbeats and humanity.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaznH9yxmEgMWQ1C6NE6fIlXkz8pfWgh_YVE4y2aD0nngOz6dJh0WazoRK3QXXjKf4WguFz61w7xWLv_Y6_LEiBiMNkf3H9ebEFNcRUJUHX1Ze5sRFj3bWoMQjRMuURCROZuYw1Vk5iC_1zzNcWJVD4gmkrGJcB6Q1iQSzfRhLnZo5mtErLzz0v_doJF9e_WQo5_ss1CPuwHzWjuAbxDY7Q8-NYqDIGv9Zp_51Nv9BSaLu_207E1VhoOkN-7_njdMvvdiBVGwvhhU"
      },
      {
        id: "historical-prince",
        name: "Historical Prince",
        description: "Legends reborn in majestic ancient palaces.",
        span: "col-span-12 md:col-span-8",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbDYOcdMJYf2wK0QAAbiM1p0CbhaGswtGQnxtZyGZbGsxPpzC_oJInZqEVTAUMKqaciRwcRgsOrAnethrDv5NEIBZkMdWvCFkRQ5q6UY69XL_5fAGW_u-f6mk_JxCOftnE1IIz01Q1Xzh1Qw9JdIghTwjbUIpnW1SeoNP8kkGP-IW1vHy2KAS_dAH9ypLLH0_pXPSGY_TMQT-Ci9oex71r35shoVyJ5JGHAKF5XtP6L0yoObAwuM0gbTHUc0U8UhYOk8Xfid5palc"
      },
      {
        id: "thriller-mystery",
        name: "Thriller & Mystery",
        description: "Dark secrets, brilliant detectives, and unexpected twists.",
        span: "col-span-12 md:col-span-4",
        image: "/images/kdrama/thriller-mystery/thriller-mystery.jpg"
      }
    ]
  },
  {
    id: "anime",
    name: "Anime",
    tagline: "Action. Isekai. Mecha.",
    theme: "Animated Realms",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqpKjHJK3Cn_QvPD8kUaekeeDHCVmAz3BNfl4G6eGkOsUZwGDMSJ9rOLCRcqyPHit690f2S9CDn5iG_QL8Kh0-1zGO_QZtwIUsY_gCybV4iskLRCzpIkfwe2QuWnXUuDxeyckEs9hatzNO1Ma_EVmlhioMrPjsbnMxmllruzLIiMflNj2JidqK55l8UFXgyyR52jsohbHhLQslNiCqfwm-NN04VSy4UzQ5fa4mrdN6z1EtlsnKdRIzTYXtHK5qVBho4kqB_enp3mo",
    color: "#ffdad5",
    icon: Swords,
    categoriesCount: 4,
    categories: [
      {
        id: "shonen-action",
        name: "Shonen Action",
        description: "High-octane battles, legendary rivalries, and the journey of awakening latent power.",
        span: "col-span-12 md:col-span-8",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqpKjHJK3Cn_QvPD8kUaekeeDHCVmAz3BNfl4G6eGkOsUZwGDMSJ9rOLCRcqyPHit690f2S9CDn5iG_QL8Kh0-1zGO_QZtwIUsY_gCybV4iskLRCzpIkfwe2QuWnXUuDxeyckEs9hatzNO1Ma_EVmlhioMrPjsbnMxmllruzLIiMflNj2JidqK55l8UFXgyyR52jsohbHhLQslNiCqfwm-NN04VSy4UzQ5fa4mrdN6z1EtlsnKdRIzTYXtHK5qVBho4kqB_enp3mo",
        badge: "HOT"
      },
      {
        id: "isekai-fantasy",
        name: "Isekai Fantasy",
        description: "Awaken in a realm of magic, monsters, and ancient prophecies.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwfrsmyiTm0I3mhCErTSoHKBjZhw7wuzhRGofa7Rsc4TOSBzp6P1WyMaiivRGZbDrHF_ISsx0dx_vvA7BBK7KtrMaJuvAwTMaQXP98W-gqlnwMG0Hvju15MJ9Z17UzOHhs8efKTspSGZRNQ69ZbD5TURZz-MvdgcCc_iSOIARk9oXbH_q36PF7vwg0cGtZ8AdN_NyKgeYsmVFNFkmMRnfIRgKige_9lXCt0TaugF5LW6tmXPKyBsb0nX4rWExX0sEk0xf6kus68RQ",
        badge: "PREMIUM"
      },
      {
        id: "mecha-cyberpunk",
        name: "Mecha & Cyberpunk",
        description: "Steel giants and neon-lit futures defending humanity against cosmic threats.",
        span: "col-span-12 md:col-span-6",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxPcVMdnisIGsvRnXDAYk1x6tfm2UbNB2GBIQ-vxevCIGvVt1G6ywCqd_sr74ywVW-FT-X7U_vKMROWMYi8vT2jpq046VHhJ8UJiib-AtUaNO9bM7gVz6ryUqUGjoXY7Z-xxa718soUddpQR7w57RQrc3K_vktfLCtnPPqwI7DGNpQX38-2qqfSaPNc4GkUsng7bHvgABwUI2d-TX3J_ABcw4TTrG1R6OOU-B54hVdsg6Qzh0sonYgrP710wC-kSAVsXKHoAPLTpA"
      },
      {
        id: "slice-of-life",
        name: "School & Slice of Life",
        description: "The beauty of the mundane, school festivals, and the warmth of human connection.",
        span: "col-span-12 md:col-span-6",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVJwXpYo330x_IXwc4KT551GHWU6wch26NPz4DfAONEEjQpT3RpR6uk1ZjU1944OTokfSmHUxl3BB79I0rkfU50tBnNNZJefYAiD7X45XMCWDRDYZDH1XsCM7i_rcemRfBB1XdGkkcGfJa6tcwCF-6spZNpl87wb6n_sfBUnP1IlWzPKCrsRfHXJjf-X-iXPEaFMEaTT4A4cSiRgnnj0GRpSrr5ayZLwz5Eo8V07OtnIc6dJ4f-YYo4hP3LISMghroeM6a7dO1heY"
      }
      // {
      //   id: "ninja-samurai",
      //   name: "Ninja & Samurai",
      //   description: "The path of the blade, shadows, and unbreakable will.",
      //   span: "col-span-12 md:col-span-4",
      //   image: "/images/anime/ninja-samurai/ninja-samurai.jpg"
      // }
    ]
  },
  {
    id: "business",
    name: "Business World",
    tagline: "Power. Strategy. Legacy.",
    theme: "Corporate Titans",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXLiVe4daMPIz13TlGNJ_vY3_I7Wbi2Fv9bMdFl1vtWu0RrP0WM79LDfwpNMXmdRkigwKt9ZRh7HtT7-jpXWAxLfVPZrKNsq3EWoDj_4weAhErbnWH4L9ORS5UF29oyR_WrbXGhGHgjGQykX8DmXj6UYGld6wn0eaTN11RT_KCh99rA1er0uDU-Xd9xe9pZejq9k_10Wshli5OQlBGdBjrS6-TovNMEdmIRJovdr8mMscOLHCAlFk1D9CCLUyNyu_NUCILCXF0g5s",
    color: "#f2ca50",
    icon: Crown,
    categoriesCount: 5,
    categories: [
      {
        id: "startup-king",
        name: "Startup King",
        description: "From garage ideas to multi-billion dollar exits. Master the art of the disruption.",
        span: "col-span-12 md:col-span-8",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXLiVe4daMPIz13TlGNJ_vY3_I7Wbi2Fv9bMdFl1vtWu0RrP0WM79LDfwpNMXmdRkigwKt9ZRh7HtT7-jpXWAxLfVPZrKNsq3EWoDj_4weAhErbnWH4L9ORS5UF29oyR_WrbXGhGHgjGQykX8DmXj6UYGld6wn0eaTN11RT_KCh99rA1er0uDU-Xd9xe9pZejq9k_10Wshli5OQlBGdBjrS6-TovNMEdmIRJovdr8mMscOLHCAlFk1D9CCLUyNyu_NUCILCXF0g5s",
        badge: "HOT NOW"
      },
      {
        id: "ceo-mindset",
        name: "CEO Mindset",
        description: "Strategic thinking, leadership, and the discipline of the world's most powerful executives.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnZQ0OLNGQUU7A6R8pA__2uk3QXU3QJV2F4oMvvk_M9ICa0CJ_GLYxsdy0BZi09x3l7dsK2x2TP5LwnjBg6KCqvOTQeX_OVCvdQnrszj6RdYviWvlryJMEKx4L_S_KdD3Ayb8iHdudz9M18vpt5EmABhKsjJ9xnxDFQo332Kji5rbrbQobK9voM2ttJb6VWNX1E1ZdEf3abSWemRRkknivGVg0tUUsR1CtN03B_xsr4e_T6UKJCwfalrVvtesbyW864ZhFMD78VuE"
      },
      {
        id: "shark-tank",
        name: "Shark Tank",
        description: "The high-stakes world of venture capital. Negotiate, invest, and dominate the room.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0oFoLF2Uj74uydit3Ly-fWLLAOAbGMOOP1X5n6aqO7EusIg_uVShKU4i4j4chrVIDLXl4QTTzwuYGx29QEY5Uih863PEKEBVwzRiZk7H0ZxLW--3NxPM9YrFSN3Xa4FhP4LYWsVcEkwif6xizOZVZXs4WWeKa82hcUEpEH8mOMVC9iwQ9iEgDh6U56hN1cSbwn70H_tcWNT9ToTAeeCGLYjWinDWXciXGT3FEGdQ2vTfWgM7NgLKZu57OpiBnvltY547HzcH4v6w"
      },
      {
        id: "billionaire-vision",
        name: "Billionaire Vision",
        description: "Beyond wealth—impact. How the world's elite shape the future of humanity.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLgT4Gfc2SDogUCwEn_xbwtV4pPc6pOSk0cU7vXTzqFmGPMV9O3XjrPXGUVE8xTTdmwfDQS_vl1xaPc_9rL_9WDyRragSrtf2AsVxoqyWjr8crFBTZgqf5Ke65NSpKX7kVriUB0y02OC-5H2HHGudKjiSPdF0jpDOqNixcZenfTsUmsaSwcF6yHthaOygKqZJLriTb2h39_VMxoZBpJLFvzXciW9GY90EAov93qI7OJKbJ_V0kZr_jbXo4msoh4azW17786bxQzgo"
      },
      {
        id: "corporate-legend",
        name: "Corporate Legend",
        description: "The stories of the institutions that built the modern world and the titans who ran them.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJwQxYW37L8h9vn0OFtIlzT_l-wIBtiyc1Xs6aRJfW5Ppoj1_ydLyzmqicIham60hQEpoky6CKeqev7IsXcQIyNmUasTp8o9eQyWBu3dgYAakMFtlPa6dAWlAMxGR9zKo1fVBJmibhEkdp07_77CiSX9YqZWY14rSlR9qgiwRjuthtC_8r-JfjxVsV5brqrtoRW2h83BiXvuCaUKaVsvgnbrHC4-_5X5tstbaPr3YdB584FjnFHzdyRVBScIajtIVGhEhwgAfJ-f8"
      }
    ]
  },
  {
    id: "student",
    name: "Student Life",
    tagline: "Campus. Chronicles. Growth.",
    theme: "Academic Journey",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHCHhD6tNDgO_DgJv6QdGM-n3ixvcUORiH5TgdsnTc_pv7DUSsXymBU00F12-AQru-DZLF3GV11A4IRvyUBsBhQsGi18QQbMVpyelpbgCNGNxNMylNvaiigHsLerqoxqrSp_Wxhw-DqNdv6mZqFY4o0U72W0LRKo14PImQ2YgGqWwpqu-loqAGfnhTxWrA8sNGMdVoGuTHf4OooavHxxUIdaX8nRiVXCFUbkASVD-YuFr2v0k4eK-daYlikIv_OP05qx-kjbSUxp0",
    color: "#e5e2e1",
    icon: GraduationCap,
    categoriesCount: 5,
    categories: [
      {
        id: "graduation-day",
        name: "Graduation Day",
        description: "The grand finale of your academic odyssey. A moment of pure prestige.",
        span: "col-span-12 md:col-span-8",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHCHhD6tNDgO_DgJv6QdGM-n3ixvcUORiH5TgdsnTc_pv7DUSsXymBU00F12-AQru-DZLF3GV11A4IRvyUBsBhQsGi18QQbMVpyelpbgCNGNxNMylNvaiigHsLerqoxqrSp_Wxhw-DqNdv6mZqFY4o0U72W0LRKo14PImQ2YgGqWwpqu-loqAGfnhTxWrA8sNGMdVoGuTHf4OooavHxxUIdaX8nRiVXCFUbkASVD-YuFr2v0k4eK-daYlikIv_OP05qx-kjbSUxp0",
        badge: "CURATED"
      },
      {
        id: "library-legend",
        name: "Library Legend",
        description: "Master the silence of the stacks.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSptEqxcEo-3SxJInCyBPZ_uhU14Uh1bJvFzBvBJ0eOFSIsr2A4CWi7eUuD6bntxacXCDV5Lb5Lkw7RrdIRQn8WzsyXju4ltdJG4wCuk14D4Yp02N4LzduHAH0YCoxLOKfhTdIDpeJFmTFKCATIosV4HYDLzOTx3oeY9UhmMj8Aic_HSXj9h-XdxYrwYowZvCBx7kr7B1PWBcAssgcKZ8ljjUfSeA2U3HojqzYaOgnoA427KolhUNSWDDB6cLnhVINrxRAuhX9X_I"
      },
      {
        id: "code-warrior",
        name: "Code Warrior",
        description: "Building the digital future from your dorm.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfPXIsilkbuqHoPa3MlV1faN-ISz3lzxAdYcnR67eKhioPkhnB2-T49wD09pLQNn8f8H2hiKUxH2Lmpg0wzwF-CCcx58xAdkE3YPH5H5FDjuK3VgPl-ZtD62_yaCgO6hVHkeJkKmc2Pk_u_9npyBKQMh3Nemjl59B5SUM3PJhhbh8Fp6bvaHIY_GCOaC18azTIGhcjHKSVLBjE30zLWbDeAnI2jLy3C7FvM4QzzoiNJkDnmRnp9EJDznQOBSlaW5gLWABvcxovuBU"
      },
      {
        id: "sporting-hero",
        name: "Sporting Hero",
        description: "The stadium lights, the roar of the crowd, the passion of competition.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAusZjfXawhoakpQiLsDoogCxipQqktAqo4mUZBByG9bNZes_VD4hBaotAqU-O9DfjUBDUshWjuaQT_ZLag3UqPkLIZ8LXuIdVVSHlFzNFuBSRj0IBzjNgUtPZkhdQ2Ev9o8szLTp0Iv5Xvonh9o39wtsDwJrIM2ccCVUpf4aduJsnPKIieUBF8BAOtaCsSil84_d7y4XJG8HV_zS2ZDEJGbEEnLdZ3C7azFnQxhSYzKrvazlueqISvQD9q3HVI3SEwZ1iEnyn6N9w"
      },
      {
        id: "campus-star",
        name: "Campus Star",
        description: "The social butterfly, navigating friendships and memories.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDWLHB02DMfDj49wPz5tY773vAjaw_ju_3xkeTCKrLbcnOGSVnw8RuzmI2lyJFt85seq0d4fCfoGP9Kjt0UUbdUG4GzeV_oBxeLRPs9e67BUbTIqNFrGHcWGe22CO5SDl_2iLq_PIzby80mdEC_rdiDv-dcssELQngJ5CLePPPkkfr8Hh95ck7VWkDWxtnywwImXxAaznjZBbLK_9RrVb7vHyQu68YRFO9axZTmiCzsD3BZ0_53_h8DeoxBoKMwk6lZ6hOji0_Wew"
      }
    ]
  },
  {
    id: "careers",
    name: "Future Careers",
    tagline: "Vision. Tech. Tomorrow.",
    theme: "Next Millennium",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvfMToiMNV89cnCtgaioHGup3ECJYbg57Z7rqpOdqe1ve4Ir2LhIW9-joFWj4bUAlzkKUUPMWD9bCWK7I7INorAskklbpqEuAin_P_z5iE-e2k_KPnJ2zqtnvmxaZSQryVYa9bKgsZLGWGcTnmnZtznkA5uMp5eY64GOIyFbC_WrCptBv3ZHR7WbD0R1AkTuyzevn4f3nF0JMz4NPBbwkzCo5WsGzLYjRpEWvaAuP3qGCsi28Y8cHVkJmfNdliRKTKDOsF7zobB-Q",
    color: "#e9c349",
    icon: Rocket,
    categoriesCount: 5,
    categories: [
      {
        id: "mars-colonist",
        name: "Mars Colonist",
        description: "Forge a new civilization on the Red Planet. Master terraforming and deep-space survival.",
        span: "col-span-12 md:col-span-8",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvfMToiMNV89cnCtgaioHGup3ECJYbg57Z7rqpOdqe1ve4Ir2LhIW9-joFWj4bUAlzkKUUPMWD9bCWK7I7INorAskklbpqEuAin_P_z5iE-e2k_KPnJ2zqtnvmxaZSQryVYa9bKgsZLGWGcTnmnZtznkA5uMp5eY64GOIyFbC_WrCptBv3ZHR7WbD0R1AkTuyzevn4f3nF0JMz4NPBbwkzCo5WsGzLYjRpEWvaAuP3qGCsi28Y8cHVkJmfNdliRKTKDOsF7zobB-Q",
        badge: "HOT"
      },
      {
        id: "cyberpunk-architect",
        name: "Cyberpunk Architect",
        description: "Design vertical megacities of the future.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7GfRURn_oksgVo-Qj9RWnV1VA5rjVSwi81finYQ9A7A1n-r2mw5O2HQx1RKHwcF4BbZHBrU0DinXnQkQVLVwfV__3z9SJ6Wp2fdvwryIEGHkE4RVyYNmC3wgTY1kscYGCLGG2w3atPOn7n_G9Xt4Cnj7GcMGAb9uCqCfTu_tqWZGIwBwRO_xY5OMVuvw2y5kCfhiU6fNjZmGENKXGlEUW2K0NsrT3b0klFbIAEl2kWx5GWNOXqnRh0YAcf7WhyZ21YXRWmKYVOo4"
      },
      {
        id: "ai-overlord",
        name: "AI Overlord",
        description: "Manage planetary algorithms and digital evolution.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDjeSYhOicxfIeQc7pUBYj8-pfB85XEz2nfLdS_RM2-Vc6YF8zNPkESWh2zRYilpIHbRFDg_KwqmRAYvqqiPjj8nZ1jscijBsUiUsB_uIXDplW8JCBr3SeMKI6gbIF75CvYL4VBkiI5wPHTjmzxa5OFruj04RX5EzJNQguy76MR0wnFMuvYLCSOypArTVKPAYRDK5OFOTHVLT9HSTonWyeuzLT18FUEdtascoVYqrhrUStVHgyzDNl9VdwxVzpMBJwrToBveaX82I"
      },
      {
        id: "quantum-engineer",
        name: "Quantum Engineer",
        description: "Bending the fabric of space-time and computation.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-yH7K4Hwr_wtcag61lHzLGQto5V0cjNZyB5N_HIkoQpMEECAfdInvcK9eUxKTJGVNwellQfwj4GcBAdMqPj-RM1Cdo26cpTqV2DnnQVEIhj7GOkw7hLSvhhKDQ21q8NDJkUskJLI9nlXxG7weATCNyAhxGcd3X4qajndEH6HsAIVUlAgUB5hRah-Comikr9MozYm5ITRlysEV3tFfk9pF838MU4xMjJ-lrj30jqIgPawfEfWzRXZXgcpy721lBWLTtEw6iXiGC28"
      },
      {
        id: "biotech-pioneer",
        name: "Bio-Tech Pioneer",
        description: "Rewriting the code of life for the next generation.",
        span: "col-span-12 md:col-span-4",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxHJwHLLo3a0yqlME0vMGB5cLDa9fIwEJlql-hxUhCDkczvTudShIeWuGbZ3CXQ5mxf2Ofxu1z5ZHDqD_y5U8ozqdLe0jG4YaLystRhjh94DoB7ulNbn8ke-1bDpFmMV0DPcd0RDbycUnI9wH07aZ8suURSUVfo3RHzzIT2YYbFOPF2856Wo17Jh9-lP3sqy3TvasG6YE-vvA-8UqaSX-BcwV-j_zVY8tKduO8_BcEjTo--LxWMgXIC08ht861H_5Z8OcBcQ6lDUI",
        badge: "PREMIUM"
      }
    ]
  }
];

const specificPosters = {
  // ── Action Hero ────────────────────────────────────────────────────────────
  "bollywood-action-hero": [
    {
      id: "bollywood-action-hero-singham",
      worldId: "bollywood",
      categoryId: "action-hero",
      name: "PK",
      description: "Fearless cop, iconic attitude",
      image: "/images/bollywoood/action/pk.jpg"
    },
    {
      id: "bollywood-action-hero-dabangg",
      worldId: "bollywood",
      categoryId: "action-hero",
      name: "Dabangg",
      description: "Classic aviators, swaggering cop",
      image: "/images/bollywoood/action/dabangg.jpg"
    },
    {
      id: "bollywood-action-hero-pushpa",
      worldId: "bollywood",
      categoryId: "action-hero",
      name: "Dhurandhar",
      description: "Raw power, jungle rebel style",
      image: "/images/bollywoood/action/dhurandhar.jpeg"
    },
    {
      id: "bollywood-action-hero-animal",
      worldId: "bollywood",
      categoryId: "action-hero",
      name: "Lagaan",
      description: "Dark intensity, ruthless hero",
      image: "/images/bollywoood/action/Lagan.jpg"
    },
    // {
    //   id: "bollywood-action-hero-pathaan",
    //   worldId: "bollywood",
    //   categoryId: "action-hero",
    //   name: "Pathaan",
    //   description: "Secret agent, explosive action",
    //   image: "/images/bollywood/action/pathaan.jpg"
    // },
    // {
    //   id: "bollywood-action-hero-jawan",
    //   worldId: "bollywood",
    //   categoryId: "action-hero",
    //   name: "Jawan",
    //   description: "Mass vigilante, army commander",
    //   image: "/images/bollywood/action/jawan.jpg"
    // },
    // {
    //   id: "bollywood-action-hero-suryavanshi",
    //   worldId: "bollywood",
    //   categoryId: "action-hero",
    //   name: "Suryavanshi",
    //   description: "Anti-terror squad, high-octane",
    //   image: "/images/bollywood/action/suryavanshi.jpg"
    // },
    // {
    //   id: "bollywood-action-hero-tiger",
    //   worldId: "bollywood",
    //   categoryId: "action-hero",
    //   name: "Tiger",
    //   description: "Elite spy, global missions",
    //   image: "/images/bollywood/action/tiger.jpg"
    // },
    // {
    //   id: "bollywood-action-hero-don",
    //   worldId: "bollywood",
    //   categoryId: "action-hero",
    //   name: "Don",
    //   description: "Stylish gangster, sharp suits",
    //   image: "/images/bollywood/action/don.jpg"
    // },
    {
      id: "bollywood-action-hero-kgf-warrior",
      worldId: "bollywood",
      categoryId: "action-hero",
      name: "KGF Warrior",
      description: "Gold mines, unstoppable legend",
      image: "/images/bollywoood/action/kgf.jpg"
    }
  ],

  // ── Romantic Hero ──────────────────────────────────────────────────────────
  "bollywood-romantic-hero": [
    {
      id: "bollywood-romantic-hero-jab-we-met",
      worldId: "bollywood",
      categoryId: "romantic-hero",
      name: "Jab We Met",
      description: "Vibrant train journey, heart full of hope",
      image: "/images/bollywood/romantic/jab-we-met.jpg"
    },
    {
      id: "bollywood-romantic-hero-rab-ne",
      worldId: "bollywood",
      categoryId: "romantic-hero",
      name: "Rab Ne Bana Di Jodi",
      description: "Simple man, deep love story",
      image: "/images/bollywood/romantic/rab-ne.jpg"
    },
    {
      id: "bollywood-romantic-hero-rockstar",
      worldId: "bollywood",
      categoryId: "romantic-hero",
      name: "Rockstar",
      description: "Tortured artist, passionate love",
      image: "/images/bollywood/romantic/rockstar.jpg"
    },
    {
      id: "bollywood-romantic-hero-aashiqui",
      worldId: "bollywood",
      categoryId: "romantic-hero",
      name: "Aashiqui",
      description: "Timeless romance, melodic love",
      image: "/images/bollywood/romantic/aashiqui.jpg"
    },
    // {
    //   id: "bollywood-romantic-hero-yjhd",
    //   worldId: "bollywood",
    //   categoryId: "romantic-hero",
    //   name: "Yeh Jawaani Hai Deewani",
    //   description: "Wanderlust, friendship turned love",
    //   image: "/images/bollywood/romantic/yjhd.jpg"
    // },
    // {
    //   id: "bollywood-romantic-hero-veer-zaara",
    //   worldId: "bollywood",
    //   categoryId: "romantic-hero",
    //   name: "Veer-Zaara",
    //   description: "Cross-border eternal love",
    //   image: "/images/bollywood/romantic/veer-zaara.jpg"
    // },
    // {
    //   id: "bollywood-romantic-hero-khnh",
    //   worldId: "bollywood",
    //   categoryId: "romantic-hero",
    //   name: "Kal Ho Naa Ho",
    //   description: "Bittersweet love, NYC backdrop",
    //   image: "/images/bollywood/romantic/khnh.jpg"
    // },
    // {
    //   id: "bollywood-romantic-hero-ddlj",
    //   worldId: "bollywood",
    //   categoryId: "romantic-hero",
    //   name: "Dilwale Dulhania",
    //   description: "Europe romance, classic charm",
    //   image: "/images/bollywood/romantic/ddlj.jpg"
    // },
    // {
    //   id: "bollywood-romantic-hero-kabir-singh",
    //   worldId: "bollywood",
    //   categoryId: "romantic-hero",
    //   name: "Kabir Singh",
    //   description: "Intense passion, unstoppable love",
    //   image: "/images/bollywood/romantic/kabir-singh.jpg"
    // },
    {
      id: "bollywood-romantic-hero-mohabbatein",
      worldId: "bollywood",
      categoryId: "romantic-hero",
      name: "Mohabbatein",
      description: "Love conquers all rules",
      image: "/images/bollywood/romantic/mohabbatein.jpg"
    }
  ],

  // ── Police & Crime ─────────────────────────────────────────────────────────
  "bollywood-police-crime": [
    {
      id: "bollywood-police-crime-ips",
      worldId: "bollywood",
      categoryId: "police-crime",
      name: "IPS Officer",
      description: "Elite Indian Police Service uniform",
      image: "/images/bollywood/police/ips-officer.jpg"
    },
    {
      id: "bollywood-police-crime-encounter",
      worldId: "bollywood",
      categoryId: "police-crime",
      name: "Encounter Specialist",
      description: "No-mercy, eyes on the target",
      image: "/images/bollywood/police/encounter.jpg"
    },
    {
      id: "bollywood-police-crime-crime-branch",
      worldId: "bollywood",
      categoryId: "police-crime",
      name: "Crime Branch",
      description: "Cracking the city's darkest cases",
      image: "/images/bollywood/police/crime-branch.jpg"
    },
    {
      id: "bollywood-police-crime-undercover",
      worldId: "bollywood",
      categoryId: "police-crime",
      name: "Undercover Agent",
      description: "Hidden identity, double life",
      image: "/images/bollywood/police/undercover.jpg"
    },
    // {
    //   id: "bollywood-police-crime-ib",
    //   worldId: "bollywood",
    //   categoryId: "police-crime",
    //   name: "Intelligence Bureau",
    //   description: "Nation's shadow protector",
    //   image: "/images/bollywood/police/ib-agent.jpg"
    // },
    // {
    //   id: "bollywood-police-crime-raw",
    //   worldId: "bollywood",
    //   categoryId: "police-crime",
    //   name: "RAW Agent",
    //   description: "Research & Analysis Wing operative",
    //   image: "/images/bollywood/police/raw-agent.jpg"
    // },
    // {
    //   id: "bollywood-police-crime-cbi",
    //   worldId: "bollywood",
    //   categoryId: "police-crime",
    //   name: "CBI Officer",
    //   description: "Central Bureau Investigation elite",
    //   image: "/images/bollywood/police/cbi-officer.jpg"
    // },
    // {
    //   id: "bollywood-police-crime-ats",
    //   worldId: "bollywood",
    //   categoryId: "police-crime",
    //   name: "Anti-Terror Squad",
    //   description: "Neutralising threats to the nation",
    //   image: "/images/bollywood/police/ats.jpg"
    // },
    // {
    //   id: "bollywood-police-crime-gangster-hunter",
    //   worldId: "bollywood",
    //   categoryId: "police-crime",
    //   name: "Gangster Hunter",
    //   description: "Streets know his name with fear",
    //   image: "/images/bollywood/police/gangster-hunter.jpg"
    // },
    {
      id: "bollywood-police-crime-investigator",
      worldId: "bollywood",
      categoryId: "police-crime",
      name: "Crime Investigator",
      description: "Every clue tells a story",
      image: "/images/bollywood/police/investigator.jpg"
    }
  ],

  // ── Music Superstar ────────────────────────────────────────────────────────
  "bollywood-music-superstar": [
    {
      id: "bollywood-music-superstar-rockstar",
      worldId: "bollywood",
      categoryId: "music-superstar",
      name: "Rockstar Singer",
      description: "Guitar, leather jacket, raw energy",
      image: "/images/bollywood/music/rockstar.jpg"
    },
    {
      id: "bollywood-music-superstar-rap",
      worldId: "bollywood",
      categoryId: "music-superstar",
      name: "Rap Star",
      description: "Street flow, mic in hand",
      image: "/images/bollywood/music/rap-star.jpg"
    },
    {
      id: "bollywood-music-superstar-concert-king",
      worldId: "bollywood",
      categoryId: "music-superstar",
      name: "Concert King",
      description: "Arena stage, crowd going wild",
      image: "/images/bollywood/music/concert-king.jpg"
    },
    {
      id: "bollywood-music-superstar-dj",
      worldId: "bollywood",
      categoryId: "music-superstar",
      name: "DJ Superstar",
      description: "Decks on fire, crowd in trance",
      image: "/images/bollywood/music/dj-superstar.jpg"
    },
    // {
    //   id: "bollywood-music-superstar-playback",
    //   worldId: "bollywood",
    //   categoryId: "music-superstar",
    //   name: "Bollywood Playback Singer",
    //   description: "Voice behind the magic",
    //   image: "/images/bollywood/music/playback.jpg"
    // },
    // {
    //   id: "bollywood-music-superstar-producer",
    //   worldId: "bollywood",
    //   categoryId: "music-superstar",
    //   name: "Music Producer",
    //   description: "Studio beats, hit-maker extraordinaire",
    //   image: "/images/bollywood/music/producer.jpg"
    // },
    // {
    //   id: "bollywood-music-superstar-guitar",
    //   worldId: "bollywood",
    //   categoryId: "music-superstar",
    //   name: "Guitar Legend",
    //   description: "Strings that speak to the soul",
    //   image: "/images/bollywood/music/guitar-legend.jpg"
    // },
    // {
    //   id: "bollywood-music-superstar-stage",
    //   worldId: "bollywood",
    //   categoryId: "music-superstar",
    //   name: "Stage Performer",
    //   description: "Born to command the spotlight",
    //   image: "/images/bollywood/music/stage-performer.jpg"
    // },
    // {
    //   id: "bollywood-music-superstar-festival",
    //   worldId: "bollywood",
    //   categoryId: "music-superstar",
    //   name: "Live Festival Star",
    //   description: "Headlining the biggest festivals",
    //   image: "/images/bollywood/music/festival-star.jpg"
    // },
    {
      id: "bollywood-music-superstar-global",
      worldId: "bollywood",
      categoryId: "music-superstar",
      name: "Global Music Icon",
      description: "Bollywood beats meet the world stage",
      image: "/images/bollywood/music/global-icon.jpg"
    }
  ],

  // ══════════════════════════════════════════════════════════════════════════
  // HOLLYWOOD
  // ══════════════════════════════════════════════════════════════════════════

  // ── Action Hero ───────────────────────────────────────────────────────────
  "hollywood-action-hero": [
    {
      id: "hollywood-action-hero-john-wick",
      worldId: "hollywood",
      categoryId: "action-hero",
      name: "John Wick Style",
      description: "Sharp suit, ruthless precision",
      image: "/images/hollywood/action/john-wick.jpg"
    },
    {
      id: "hollywood-action-hero-mission",
      worldId: "hollywood",
      categoryId: "action-hero",
      name: "Mission Impossible Style",
      description: "Impossible tasks, flawless execution",
      image: "/images/hollywood/action/mission-impossible.jpg"
    },
    {
      id: "hollywood-action-hero-fast",
      worldId: "hollywood",
      categoryId: "action-hero",
      name: "Fast & Furious Style",
      description: "Speed, adrenaline, family",
      image: "/images/hollywood/action/fast-furious.jpg"
    },
    {
      id: "hollywood-action-hero-extraction",
      worldId: "hollywood",
      categoryId: "action-hero",
      name: "Extraction Style",
      description: "Tactical mercenary, raw combat",
      image: "/images/hollywood/action/extraction.jpg"
    },
    // {
    //   id: "hollywood-action-hero-equalizer",
    //   worldId: "hollywood",
    //   categoryId: "action-hero",
    //   name: "Equalizer Style",
    //   description: "Justice seeker, calm & deadly",
    //   image: "/images/hollywood/action/equalizer.jpg"
    // },
    // {
    //   id: "hollywood-action-hero-secret-agent",
    //   worldId: "hollywood",
    //   categoryId: "action-hero",
    //   name: "Secret Agent",
    //   description: "License to thrill, shaken not stirred",
    //   image: "/images/hollywood/action/secret-agent.jpg"
    // },
    // {
    //   id: "hollywood-action-hero-assassin",
    //   worldId: "hollywood",
    //   categoryId: "action-hero",
    //   name: "Assassin Elite",
    //   description: "Silent, skilled, unstoppable",
    //   image: "/images/hollywood/action/assassin-elite.jpg"
    // },
    // {
    //   id: "hollywood-action-hero-cia",
    //   worldId: "hollywood",
    //   categoryId: "action-hero",
    //   name: "CIA Operative",
    //   description: "Intelligence meets deadly force",
    //   image: "/images/hollywood/action/cia-operative.jpg"
    // },
    // {
    //   id: "hollywood-action-hero-mercenary",
    //   worldId: "hollywood",
    //   categoryId: "action-hero",
    //   name: "Mercenary Warrior",
    //   description: "Hired gun, world-class soldier",
    //   image: "/images/hollywood/action/mercenary.jpg"
    // },
    {
      id: "hollywood-action-hero-vigilante",
      worldId: "hollywood",
      categoryId: "action-hero",
      name: "Urban Vigilante",
      description: "City's last line of justice",
      image: "/images/hollywood/action/urban-vigilante.jpg"
    }
  ],

  // ── Superhero ─────────────────────────────────────────────────────────────
  "hollywood-superhero": [
    {
      id: "hollywood-superhero-iron",
      worldId: "hollywood",
      categoryId: "superhero",
      name: "Iron Hero",
      description: "Genius billionaire in powered armour",
      image: "/images/hollywood/superhero/iron-hero.jpg"
    },
    {
      id: "hollywood-superhero-dark-knight",
      worldId: "hollywood",
      categoryId: "superhero",
      name: "Dark Knight",
      description: "The night's shadow, city's protector",
      image: "/images/hollywood/superhero/dark-knight.jpg"
    },
    {
      id: "hollywood-superhero-super-soldier",
      worldId: "hollywood",
      categoryId: "superhero",
      name: "Super Soldier",
      description: "Enhanced warrior, shield in hand",
      image: "/images/hollywood/superhero/super-soldier.jpg"
    },
    {
      id: "hollywood-superhero-flying-guardian",
      worldId: "hollywood",
      categoryId: "superhero",
      name: "Flying Guardian",
      description: "Last son of steel, soaring protector",
      image: "/images/hollywood/superhero/flying-guardian.jpg"
    },
    // {
    //   id: "hollywood-superhero-tech-genius",
    //   worldId: "hollywood",
    //   categoryId: "superhero",
    //   name: "Tech Genius Hero",
    //   description: "Wit and tech as formidable as any power",
    //   image: "/images/hollywood/superhero/tech-genius.jpg"
    // },
    // {
    //   id: "hollywood-superhero-thunder",
    //   worldId: "hollywood",
    //   categoryId: "superhero",
    //   name: "Thunder Warrior",
    //   description: "God of thunder, legendary hammer",
    //   image: "/images/hollywood/superhero/thunder-warrior.jpg"
    // },
    // {
    //   id: "hollywood-superhero-space",
    //   worldId: "hollywood",
    //   categoryId: "superhero",
    //   name: "Space Protector",
    //   description: "Intergalactic guardian, cosmic ring",
    //   image: "/images/hollywood/superhero/space-protector.jpg"
    // },
    // {
    //   id: "hollywood-superhero-time-traveler",
    //   worldId: "hollywood",
    //   categoryId: "superhero",
    //   name: "Time Traveler",
    //   description: "Master of infinite timelines",
    //   image: "/images/hollywood/superhero/time-traveler.jpg"
    // },
    // {
    //   id: "hollywood-superhero-speed",
    //   worldId: "hollywood",
    //   categoryId: "superhero",
    //   name: "Speed Hero",
    //   description: "Fastest being alive, crimson blur",
    //   image: "/images/hollywood/superhero/speed-hero.jpg"
    // },
    {
      id: "hollywood-superhero-cosmic",
      worldId: "hollywood",
      categoryId: "superhero",
      name: "Cosmic Defender",
      description: "Power of a thousand suns",
      image: "/images/hollywood/superhero/cosmic-defender.jpg"
    }
  ],

  // ── Sci-Fi Explorer ───────────────────────────────────────────────────────
  "hollywood-sci-fi-explorer": [
    {
      id: "hollywood-scifi-mars",
      worldId: "hollywood",
      categoryId: "sci-fi-explorer",
      name: "Mars Explorer",
      description: "Surviving the Red Planet alone",
      image: "/images/hollywood/scifi/mars-explorer.jpg"
    },
    {
      id: "hollywood-scifi-galaxy",
      worldId: "hollywood",
      categoryId: "sci-fi-explorer",
      name: "Galaxy Commander",
      description: "Leading the fleet across star systems",
      image: "/images/hollywood/scifi/galaxy-commander.jpg"
    },
    {
      id: "hollywood-scifi-space-pilot",
      worldId: "hollywood",
      categoryId: "sci-fi-explorer",
      name: "Space Pilot",
      description: "Ace of the cosmos, born to fly",
      image: "/images/hollywood/scifi/space-pilot.jpg"
    },
    // {
    //   id: "hollywood-scifi-alien-hunter",
    //   worldId: "hollywood",
    //   categoryId: "sci-fi-explorer",
    //   name: "Alien Hunter",
    //   description: "Tracking lifeforms across the universe",
    //   image: "/images/hollywood/scifi/alien-hunter.jpg"
    // },
    // {
    //   id: "hollywood-scifi-future-soldier",
    //   worldId: "hollywood",
    //   categoryId: "sci-fi-explorer",
    //   name: "Future Soldier",
    //   description: "Exosuit warrior of 2150",
    //   image: "/images/hollywood/scifi/future-soldier.jpg"
    // },
    // {
    //   id: "hollywood-scifi-interstellar",
    //   worldId: "hollywood",
    //   categoryId: "sci-fi-explorer",
    //   name: "Interstellar Traveler",
    //   description: "Beyond the event horizon",
    //   image: "/images/hollywood/scifi/interstellar.jpg"
    // },
    // {
    //   id: "hollywood-scifi-deep-space",
    //   worldId: "hollywood",
    //   categoryId: "sci-fi-explorer",
    //   name: "Deep Space Captain",
    //   description: "Command of the unknown frontier",
    //   image: "/images/hollywood/scifi/deep-space-captain.jpg"
    // },
    // {
    //   id: "hollywood-scifi-colonizer",
    //   worldId: "hollywood",
    //   categoryId: "sci-fi-explorer",
    //   name: "Planet Colonizer",
    //   description: "First footstep on a new world",
    //   image: "/images/hollywood/scifi/colonizer.jpg"
    // },
    // {
    //   id: "hollywood-scifi-researcher",
    //   worldId: "hollywood",
    //   categoryId: "sci-fi-explorer",
    //   name: "Space Researcher",
    //   description: "Science in zero gravity",
    //   image: "/images/hollywood/scifi/space-researcher.jpg"
    // },
    {
      id: "hollywood-scifi-cosmic-adventurer",
      worldId: "hollywood",
      categoryId: "sci-fi-explorer",
      name: "Cosmic Adventurer",
      description: "Galaxy-hopping thrill seeker",
      image: "/images/hollywood/scifi/cosmic-adventurer.jpg"
    }
  ],

  // ── Detective & Mystery ───────────────────────────────────────────────────
  "hollywood-detective-mystery": [
    {
      id: "hollywood-detective-sherlock",
      worldId: "hollywood",
      categoryId: "detective-mystery",
      name: "Sherlock Style",
      description: "Elementary, the mind never rests",
      image: "/images/hollywood/detective/sherlock.jpg"
    },
    {
      id: "hollywood-detective-noir",
      worldId: "hollywood",
      categoryId: "detective-mystery",
      name: "Noir Detective",
      description: "Rain-soaked streets, cigarette smoke",
      image: "/images/hollywood/detective/noir-detective.jpg"
    },
    {
      id: "hollywood-detective-fbi",
      worldId: "hollywood",
      categoryId: "detective-mystery",
      name: "FBI Agent",
      description: "Federal authority, badge and gun",
      image: "/images/hollywood/detective/fbi-agent.jpg"
    },
    {
      id: "hollywood-detective-spy",
      worldId: "hollywood",
      categoryId: "detective-mystery",
      name: "Secret Spy",
      description: "Never blown, always watching",
      image: "/images/hollywood/detective/secret-spy.jpg"
    },
    {
      id: "hollywood-detective-investigator",
      worldId: "hollywood",
      categoryId: "detective-mystery",
      name: "Crime Investigator",
      description: "Every scene tells the truth",
      image: "/images/hollywood/detective/crime-investigator.jpg"
    },
    {
      id: "hollywood-detective-forensic",
      worldId: "hollywood",
      categoryId: "detective-mystery",
      name: "Forensic Expert",
      description: "Evidence never lies, he proves it",
      image: "/images/hollywood/detective/forensic-expert.jpg"
    },
    {
      id: "hollywood-detective-missing",
      worldId: "hollywood",
      categoryId: "detective-mystery",
      name: "Missing Person Detective",
      description: "Finding the ones no one else will",
      image: "/images/hollywood/detective/missing-person.jpg"
    },
    {
      id: "hollywood-detective-serial-killer",
      worldId: "hollywood",
      categoryId: "detective-mystery",
      name: "Serial Killer Hunter",
      description: "Profiling the darkest minds",
      image: "/images/hollywood/detective/serial-killer-hunter.jpg"
    },
    {
      id: "hollywood-detective-cyber",
      worldId: "hollywood",
      categoryId: "detective-mystery",
      name: "Cyber Detective",
      description: "Hacking through digital shadows",
      image: "/images/hollywood/detective/cyber-detective.jpg"
    },
    {
      id: "hollywood-detective-intelligence",
      worldId: "hollywood",
      categoryId: "detective-mystery",
      name: "Intelligence Analyst",
      description: "Connecting dots from satellite to street",
      image: "/images/hollywood/detective/intelligence-analyst.jpg"
    }
  ],

  // ── Fantasy & Adventure ───────────────────────────────────────────────────
  "hollywood-fantasy-adventure": [
    // {
    //   id: "hollywood-fantasy-pirate",
    //   worldId: "hollywood",
    //   categoryId: "fantasy-adventure",
    //   name: "Pirate Captain",
    //   description: "Master of the high seas and buried gold",
    //   image: "/images/hollywood/fantasy/pirate-captain.jpg"
    // },
    // {
    //   id: "hollywood-fantasy-viking",
    //   worldId: "hollywood",
    //   categoryId: "fantasy-adventure",
    //   name: "Viking Warrior",
    //   description: "Fearless Norse raider of legend",
    //   image: "/images/hollywood/fantasy/viking-warrior.jpg"
    // },
    // {
    //   id: "hollywood-fantasy-dragon-slayer",
    //   worldId: "hollywood",
    //   categoryId: "fantasy-adventure",
    //   name: "Dragon Slayer",
    //   description: "Blade forged to defeat the impossible",
    //   image: "/images/hollywood/fantasy/dragon-slayer.jpg"
    // },
    // {
    //   id: "hollywood-fantasy-knight",
    //   worldId: "hollywood",
    //   categoryId: "fantasy-adventure",
    //   name: "Medieval Knight",
    //   description: "Honour-bound protector of the realm",
    //   image: "/images/hollywood/fantasy/medieval-knight.jpg"
    // },
    // {
    //   id: "hollywood-fantasy-treasure-hunter",
    //   worldId: "hollywood",
    //   categoryId: "fantasy-adventure",
    //   name: "Treasure Hunter",
    //   description: "Whip in hand, history in sight",
    //   image: "/images/hollywood/fantasy/treasure-hunter.jpg"
    // },
    {
      id: "hollywood-fantasy-lost-kingdom",
      worldId: "hollywood",
      categoryId: "fantasy-adventure",
      name: "Lost Kingdom Explorer",
      description: "Discovering civilisations forgotten by time",
      image: "/images/hollywood/fantasy/lost-kingdom.jpg"
    },
    {
      id: "hollywood-fantasy-jungle",
      worldId: "hollywood",
      categoryId: "fantasy-adventure",
      name: "Jungle Adventurer",
      description: "Razor instincts, ancient jungle trails",
      image: "/images/hollywood/fantasy/jungle-adventurer.jpg"
    },
    {
      id: "hollywood-fantasy-gladiator",
      worldId: "hollywood",
      categoryId: "fantasy-adventure",
      name: "Gladiator Champion",
      description: "Undefeated in the arena of blood and glory",
      image: "/images/hollywood/fantasy/gladiator.jpg"
    },
    {
      id: "hollywood-fantasy-mythological",
      worldId: "hollywood",
      categoryId: "fantasy-adventure",
      name: "Mythological Hero",
      description: "Born of gods, forged in legend",
      image: "/images/hollywood/fantasy/mythological-hero.jpg"
    },
    {
      id: "hollywood-fantasy-ancient-warrior",
      worldId: "hollywood",
      categoryId: "fantasy-adventure",
      name: "Ancient Warrior",
      description: "Battle-hardened, armour stained in glory",
      image: "/images/hollywood/fantasy/ancient-warrior.jpg"
    }
  ],

  // ══════════════════════════════════════════════════════════════════════════
  // TOLLYWOOD
  // ══════════════════════════════════════════════════════════════════════════

  // ── Mass Action ───────────────────────────────────────────────────────────
  "tollywood-mass-action": [
    // {
    //   id: "tollywood-mass-action-pushpa",
    //   worldId: "tollywood",
    //   categoryId: "mass-action",
    //   name: "Pushpa Style",
    //   description: "Raw power, unmatched swagger",
    //   image: "/images/tollywood/mass-action/pushpa.jpg"
    // },
    // {
    //   id: "tollywood-mass-action-rrr",
    //   worldId: "tollywood",
    //   categoryId: "mass-action",
    //   name: "RRR Warrior",
    //   description: "Fierce rebellion, roaring energy",
    //   image: "/images/tollywood/mass-action/rrr-warrior.jpg"
    // },
    // {
    //   id: "tollywood-mass-action-salaar",
    //   worldId: "tollywood",
    //   categoryId: "mass-action",
    //   name: "Salaar Hero",
    //   description: "Dark, gritty, and unstoppable",
    //   image: "/images/tollywood/mass-action/salaar-hero.jpg"
    // },
    // {
    //   id: "tollywood-mass-action-devara",
    //   worldId: "tollywood",
    //   categoryId: "mass-action",
    //   name: "Devara Fighter",
    //   description: "Fearless guardian of the coast",
    //   image: "/images/tollywood/mass-action/devara-fighter.jpg"
    // },
    // {
    //   id: "tollywood-mass-action-rebel-star",
    //   worldId: "tollywood",
    //   categoryId: "mass-action",
    //   name: "Rebel Star",
    //   description: "Born to break the rules",
    //   image: "/images/tollywood/mass-action/rebel-star.jpg"
    // },
    {
      id: "tollywood-mass-action-village-boss",
      worldId: "tollywood",
      categoryId: "mass-action",
      name: "Village Boss",
      description: "Ruling the lands with an iron fist",
      image: "/images/tollywood/mass-action/village-boss.jpg"
    },
    {
      id: "tollywood-mass-action-firebrand",
      worldId: "tollywood",
      categoryId: "mass-action",
      name: "Firebrand Leader",
      description: "Leading the charge with explosive fury",
      image: "/images/tollywood/mass-action/firebrand-leader.jpg"
    },
    {
      id: "tollywood-mass-action-commander",
      worldId: "tollywood",
      categoryId: "mass-action",
      name: "Action Commander",
      description: "Taking control of every battlefield",
      image: "/images/tollywood/mass-action/action-commander.jpg"
    },
    {
      id: "tollywood-mass-action-superstar",
      worldId: "tollywood",
      categoryId: "mass-action",
      name: "South Superstar",
      description: "Unmatched charisma, absolute mass",
      image: "/images/tollywood/mass-action/south-superstar.jpg"
    },
    {
      id: "tollywood-mass-action-maharaja",
      worldId: "tollywood",
      categoryId: "mass-action",
      name: "Mass Maharaja",
      description: "The undisputed king of entertainment",
      image: "/images/tollywood/mass-action/mass-maharaja.jpg"
    }
  ],

  // ── Village Hero ──────────────────────────────────────────────────────────
  "tollywood-village-hero": [
    // {
    //   id: "tollywood-village-hero-farmer",
    //   worldId: "tollywood",
    //   categoryId: "village-hero",
    //   name: "Farmer Leader",
    //   description: "Rooted in the soil, fighting for the people",
    //   image: "/images/tollywood/village-hero/farmer-leader.jpg"
    // },
    // {
    //   id: "tollywood-village-hero-protector",
    //   worldId: "tollywood",
    //   categoryId: "village-hero",
    //   name: "Village Protector",
    //   description: "Shield of the innocent, pride of the town",
    //   image: "/images/tollywood/village-hero/village-protector.jpg"
    // },
    // {
    //   id: "tollywood-village-hero-champion",
    //   worldId: "tollywood",
    //   categoryId: "village-hero",
    //   name: "Rural Champion",
    //   description: "Rising from the dust to conquer all",
    //   image: "/images/tollywood/village-hero/rural-champion.jpg"
    // },
    // {
    //   id: "tollywood-village-hero-festival",
    //   worldId: "tollywood",
    //   categoryId: "village-hero",
    //   name: "Festival King",
    //   description: "Bringing joy and celebration to every home",
    //   image: "/images/tollywood/village-hero/festival-king.jpg"
    // },
    // {
    //   id: "tollywood-village-hero-community",
    //   worldId: "tollywood",
    //   categoryId: "village-hero",
    //   name: "Community Hero",
    //   description: "Standing tall for his people",
    //   image: "/images/tollywood/village-hero/community-hero.jpg"
    // },
    {
      id: "tollywood-village-hero-panchayat",
      worldId: "tollywood",
      categoryId: "village-hero",
      name: "Panchayat Leader",
      description: "Voice of justice, symbol of trust",
      image: "/images/tollywood/village-hero/panchayat-leader.jpg"
    },
    {
      id: "tollywood-village-hero-warrior",
      worldId: "tollywood",
      categoryId: "village-hero",
      name: "Village Warrior",
      description: "Defending honor with every breath",
      image: "/images/tollywood/village-hero/village-warrior.jpg"
    },
    {
      id: "tollywood-village-hero-harvest",
      worldId: "tollywood",
      categoryId: "village-hero",
      name: "Harvest Hero",
      description: "Bringing prosperity and abundance",
      image: "/images/tollywood/village-hero/harvest-hero.jpg"
    },
    {
      id: "tollywood-village-hero-peoples",
      worldId: "tollywood",
      categoryId: "village-hero",
      name: "People's Leader",
      description: "A leader chosen by the masses",
      image: "/images/tollywood/village-hero/peoples-leader.jpg"
    },
    {
      id: "tollywood-village-hero-folk",
      worldId: "tollywood",
      categoryId: "village-hero",
      name: "Folk Legend",
      description: "Tales of bravery sung for generations",
      image: "/images/tollywood/village-hero/folk-legend.jpg"
    }
  ],

  // ── Royal Warrior ─────────────────────────────────────────────────────────
  "tollywood-royal-warrior": [
    // {
    //   id: "tollywood-royal-warrior-bahubali",
    //   worldId: "tollywood",
    //   categoryId: "royal-warrior",
    //   name: "Bahubali",
    //   description: "The true heir, champion of the people",
    //   image: "/images/tollywood/royal-warrior/bahubali.jpg"
    // },
    // {
    //   id: "tollywood-royal-warrior-empire",
    //   worldId: "tollywood",
    //   categoryId: "royal-warrior",
    //   name: "Empire Ruler",
    //   description: "Commanding greatness and respect",
    //   image: "/images/tollywood/royal-warrior/empire-ruler.jpg"
    // },
    // {
    //   id: "tollywood-royal-warrior-sword",
    //   worldId: "tollywood",
    //   categoryId: "royal-warrior",
    //   name: "Sword Warrior",
    //   description: "Master of the blade, unmatched in combat",
    //   image: "/images/tollywood/royal-warrior/sword-warrior.jpg"
    // },
    // {
    //   id: "tollywood-royal-warrior-battle",
    //   worldId: "tollywood",
    //   categoryId: "royal-warrior",
    //   name: "Battle Commander",
    //   description: "Leading armies to glorious victory",
    //   image: "/images/tollywood/royal-warrior/battle-commander.jpg"
    // },
    // {
    //   id: "tollywood-royal-warrior-ancient",
    //   worldId: "tollywood",
    //   categoryId: "royal-warrior",
    //   name: "Ancient King",
    //   description: "A ruler from the golden era",
    //   image: "/images/tollywood/royal-warrior/ancient-king.jpg"
    // },
    {
      id: "tollywood-royal-warrior-palace",
      worldId: "tollywood",
      categoryId: "royal-warrior",
      name: "Palace Defender",
      description: "Protecting the royal bloodline",
      image: "/images/tollywood/royal-warrior/palace-defender.jpg"
    },
    {
      id: "tollywood-royal-warrior-prince",
      worldId: "tollywood",
      categoryId: "royal-warrior",
      name: "Royal Prince",
      description: "Elegance, charm, and hidden strength",
      image: "/images/tollywood/royal-warrior/royal-prince.jpg"
    },
    {
      id: "tollywood-royal-warrior-kingdom",
      worldId: "tollywood",
      categoryId: "royal-warrior",
      name: "Kingdom Protector",
      description: "The shield of the vast empire",
      image: "/images/tollywood/royal-warrior/kingdom-protector.jpg"
    },
    {
      id: "tollywood-royal-warrior-general",
      worldId: "tollywood",
      categoryId: "royal-warrior",
      name: "War General",
      description: "Strategic mastermind of the battlefield",
      image: "/images/tollywood/royal-warrior/war-general.jpg"
    },
    {
      id: "tollywood-royal-warrior-emperor",
      worldId: "tollywood",
      categoryId: "royal-warrior",
      name: "Legendary Emperor",
      description: "A name etched in history forever",
      image: "/images/tollywood/royal-warrior/legendary-emperor.jpg"
    }
  ],

  // ── Police Power ──────────────────────────────────────────────────────────
  "tollywood-police-power": [
    // {
    //   id: "tollywood-police-power-ips",
    //   worldId: "tollywood",
    //   categoryId: "police-power",
    //   name: "IPS Officer",
    //   description: "Upholding the law with fierce dedication",
    //   image: "/images/tollywood/police-power/ips-officer.jpg"
    // },
    // {
    //   id: "tollywood-police-power-action",
    //   worldId: "tollywood",
    //   categoryId: "police-power",
    //   name: "Action Cop",
    //   description: "Delivering justice with blazing speed",
    //   image: "/images/tollywood/police-power/action-cop.jpg"
    // },
    // {
    //   id: "tollywood-police-power-crime",
    //   worldId: "tollywood",
    //   categoryId: "police-power",
    //   name: "Crime Fighter",
    //   description: "Cleaning up the city, one criminal at a time",
    //   image: "/images/tollywood/police-power/crime-fighter.jpg"
    // },
    // {
    //   id: "tollywood-police-power-encounter",
    //   worldId: "tollywood",
    //   categoryId: "police-power",
    //   name: "Encounter Specialist",
    //   description: "No mercy for the wicked",
    //   image: "/images/tollywood/police-power/encounter-specialist.jpg"
    // },
    // {
    //   id: "tollywood-police-power-anti-gang",
    //   worldId: "tollywood",
    //   categoryId: "police-power",
    //   name: "Anti-Gang Unit",
    //   description: "Taking down organized crime syndicates",
    //   image: "/images/tollywood/police-power/anti-gang-unit.jpg"
    // },
    {
      id: "tollywood-police-power-city",
      worldId: "tollywood",
      categoryId: "police-power",
      name: "City Protector",
      description: "The guardian angel of the metropolis",
      image: "/images/tollywood/police-power/city-protector.jpg"
    },
    {
      id: "tollywood-police-power-commissioner",
      worldId: "tollywood",
      categoryId: "police-power",
      name: "Police Commissioner",
      description: "Leading the force with authority",
      image: "/images/tollywood/police-power/police-commissioner.jpg"
    },
    {
      id: "tollywood-police-power-elite",
      worldId: "tollywood",
      categoryId: "police-power",
      name: "Elite Task Force",
      description: "Handling the most dangerous missions",
      image: "/images/tollywood/police-power/elite-task-force.jpg"
    },
    {
      id: "tollywood-police-power-intelligence",
      worldId: "tollywood",
      categoryId: "police-power",
      name: "Intelligence Officer",
      description: "Outsmarting the enemies of the state",
      image: "/images/tollywood/police-power/intelligence-officer.jpg"
    },
    {
      id: "tollywood-police-power-hero",
      worldId: "tollywood",
      categoryId: "police-power",
      name: "Hero Cop",
      description: "Loved by the people, feared by the corrupt",
      image: "/images/tollywood/police-power/hero-cop.jpg"
    }
  ],

  // ══════════════════════════════════════════════════════════════════════════
  // K-DRAMA
  // ══════════════════════════════════════════════════════════════════════════

  // ── Modern Romance ────────────────────────────────────────────────────────
  "kdrama-modern-romance": [
    // {
    //   id: "kdrama-modern-romance-seoul",
    //   worldId: "kdrama",
    //   categoryId: "modern-romance",
    //   name: "Seoul Love Story",
    //   description: "Finding love in the neon-lit streets of Seoul",
    //   image: "/images/kdrama/modern-romance/seoul-love-story.jpg"
    // },
    // {
    //   id: "kdrama-modern-romance-coffee",
    //   worldId: "kdrama",
    //   categoryId: "modern-romance",
    //   name: "Coffee Shop Romance",
    //   description: "A sweet encounter over a warm cup of coffee",
    //   image: "/images/kdrama/modern-romance/coffee-shop-romance.jpg"
    // },
    // {
    //   id: "kdrama-modern-romance-first",
    //   worldId: "kdrama",
    //   categoryId: "modern-romance",
    //   name: "First Love",
    //   description: "The innocent and unforgettable feeling of first love",
    //   image: "/images/kdrama/modern-romance/first-love.jpg"
    // },
    // {
    //   id: "kdrama-modern-romance-winter",
    //   worldId: "kdrama",
    //   categoryId: "modern-romance",
    //   name: "Winter Romance",
    //   description: "Warm embraces in the freezing snow",
    //   image: "/images/kdrama/modern-romance/winter-romance.jpg"
    // },
    // {
    //   id: "kdrama-modern-romance-rooftop",
    //   worldId: "kdrama",
    //   categoryId: "modern-romance",
    //   name: "Rooftop Proposal",
    //   description: "A confession under the starry night sky",
    //   image: "/images/kdrama/modern-romance/rooftop-proposal.jpg"
    // },
    {
      id: "kdrama-modern-romance-university",
      worldId: "kdrama",
      categoryId: "modern-romance",
      name: "University Sweethearts",
      description: "Campus romance that blossomed into forever",
      image: "/images/kdrama/modern-romance/university-sweethearts.jpg"
    },
    {
      id: "kdrama-modern-romance-rainy",
      worldId: "kdrama",
      categoryId: "modern-romance",
      name: "Rainy Day Romance",
      description: "Sharing an umbrella in the pouring rain",
      image: "/images/kdrama/modern-romance/rainy-day-romance.jpg"
    },
    {
      id: "kdrama-modern-romance-luxury",
      worldId: "kdrama",
      categoryId: "modern-romance",
      name: "Luxury Couple",
      description: "High fashion and undeniable chemistry",
      image: "/images/kdrama/modern-romance/luxury-couple.jpg"
    },
    {
      id: "kdrama-modern-romance-travel",
      worldId: "kdrama",
      categoryId: "modern-romance",
      name: "Travel Romance",
      description: "Falling in love while exploring the world",
      image: "/images/kdrama/modern-romance/travel-romance.jpg"
    },
    {
      id: "kdrama-modern-romance-wedding",
      worldId: "kdrama",
      categoryId: "modern-romance",
      name: "Wedding Romance",
      description: "A beautiful promise of forever",
      image: "/images/kdrama/modern-romance/wedding-romance.jpg"
    }
  ],

  // ── CEO Romance ───────────────────────────────────────────────────────────
  "kdrama-ceo-romance": [
    // {
    //   id: "kdrama-ceo-romance-young",
    //   worldId: "kdrama",
    //   categoryId: "ceo-romance",
    //   name: "Young CEO",
    //   description: "Brilliant, successful, and unexpectedly charming",
    //   image: "/images/kdrama/ceo-romance/young-ceo.jpg"
    // },
    // {
    //   id: "kdrama-ceo-romance-startup",
    //   worldId: "kdrama",
    //   categoryId: "ceo-romance",
    //   name: "Startup Founder",
    //   description: "Building an empire from the ground up",
    //   image: "/images/kdrama/ceo-romance/startup-founder.jpg"
    // },
    // {
    //   id: "kdrama-ceo-romance-luxury",
    //   worldId: "kdrama",
    //   categoryId: "ceo-romance",
    //   name: "Luxury Executive",
    //   description: "Living a life of opulence and high stakes",
    //   image: "/images/kdrama/ceo-romance/luxury-executive.jpg"
    // },
    // {
    //   id: "kdrama-ceo-romance-chairman",
    //   worldId: "kdrama",
    //   categoryId: "ceo-romance",
    //   name: "Chairman's Son",
    //   description: "The rebellious heir to a massive conglomerate",
    //   image: "/images/kdrama/ceo-romance/chairmans-son.jpg"
    // },
    // {
    //   id: "kdrama-ceo-romance-corporate",
    //   worldId: "kdrama",
    //   categoryId: "ceo-romance",
    //   name: "Corporate Prince",
    //   description: "Flawless on paper, but searching for real love",
    //   image: "/images/kdrama/ceo-romance/corporate-prince.jpg"
    // },
    {
      id: "kdrama-ceo-romance-billionaire",
      worldId: "kdrama",
      categoryId: "ceo-romance",
      name: "Billionaire CEO",
      description: "He has everything, except the one he truly wants",
      image: "/images/kdrama/ceo-romance/billionaire-ceo.jpg"
    },
    {
      id: "kdrama-ceo-romance-office",
      worldId: "kdrama",
      categoryId: "ceo-romance",
      name: "Office Romance",
      description: "Secret glances in the boardroom",
      image: "/images/kdrama/ceo-romance/office-romance.jpg"
    },
    {
      id: "kdrama-ceo-romance-hotel",
      worldId: "kdrama",
      categoryId: "ceo-romance",
      name: "Hotel Owner",
      description: "Managing a luxury hotel and a complicated heart",
      image: "/images/kdrama/ceo-romance/hotel-owner.jpg"
    },
    {
      id: "kdrama-ceo-romance-tech",
      worldId: "kdrama",
      categoryId: "ceo-romance",
      name: "Tech Founder",
      description: "Innovating the future, struggling with feelings",
      image: "/images/kdrama/ceo-romance/tech-founder.jpg"
    },
    {
      id: "kdrama-ceo-romance-heir",
      worldId: "kdrama",
      categoryId: "ceo-romance",
      name: "Business Heir",
      description: "Carrying the weight of the family legacy",
      image: "/images/kdrama/ceo-romance/business-heir.jpg"
    }
  ],

  // ── Medical Drama ─────────────────────────────────────────────────────────
  "kdrama-medical-drama": [
    // {
    //   id: "kdrama-medical-drama-surgeon",
    //   worldId: "kdrama",
    //   categoryId: "medical-drama",
    //   name: "Surgeon",
    //   description: "Precision, focus, and saving lives in the OR",
    //   image: "/images/kdrama/medical-drama/surgeon.jpg"
    // },
    // {
    //   id: "kdrama-medical-drama-emergency",
    //   worldId: "kdrama",
    //   categoryId: "medical-drama",
    //   name: "Emergency Doctor",
    //   description: "Thriving in the chaos of the ER",
    //   image: "/images/kdrama/medical-drama/emergency-doctor.jpg"
    // },
    // {
    //   id: "kdrama-medical-drama-heart",
    //   worldId: "kdrama",
    //   categoryId: "medical-drama",
    //   name: "Heart Specialist",
    //   description: "Mending broken hearts, both literally and figuratively",
    //   image: "/images/kdrama/medical-drama/heart-specialist.jpg"
    // },
    // {
    //   id: "kdrama-medical-drama-genius",
    //   worldId: "kdrama",
    //   categoryId: "medical-drama",
    //   name: "Medical Genius",
    //   description: "Solving the most complex medical mysteries",
    //   image: "/images/kdrama/medical-drama/medical-genius.jpg"
    // },
    // {
    //   id: "kdrama-medical-drama-hero",
    //   worldId: "kdrama",
    //   categoryId: "medical-drama",
    //   name: "Hospital Hero",
    //   description: "Going above and beyond for every patient",
    //   image: "/images/kdrama/medical-drama/hospital-hero.jpg"
    // },
    {
      id: "kdrama-medical-drama-neurosurgeon",
      worldId: "kdrama",
      categoryId: "medical-drama",
      name: "Neurosurgeon",
      description: "Operating on the delicate threads of the mind",
      image: "/images/kdrama/medical-drama/neurosurgeon.jpg"
    },
    {
      id: "kdrama-medical-drama-trauma",
      worldId: "kdrama",
      categoryId: "medical-drama",
      name: "Trauma Specialist",
      description: "Facing critical moments with absolute calm",
      image: "/images/kdrama/medical-drama/trauma-specialist.jpg"
    },
    {
      id: "kdrama-medical-drama-chief",
      worldId: "kdrama",
      categoryId: "medical-drama",
      name: "Chief Doctor",
      description: "Leading the hospital with wisdom and authority",
      image: "/images/kdrama/medical-drama/chief-doctor.jpg"
    },
    {
      id: "kdrama-medical-drama-professor",
      worldId: "kdrama",
      categoryId: "medical-drama",
      name: "Medical Professor",
      description: "Guiding the next generation of lifesavers",
      image: "/images/kdrama/medical-drama/medical-professor.jpg"
    },
    {
      id: "kdrama-medical-drama-icu",
      worldId: "kdrama",
      categoryId: "medical-drama",
      name: "ICU Specialist",
      description: "Fighting for life in the critical care unit",
      image: "/images/kdrama/medical-drama/icu-specialist.jpg"
    }
  ],

  // ── Historical Prince ─────────────────────────────────────────────────────
  "kdrama-historical-prince": [
    // {
    //   id: "kdrama-historical-prince-crown",
    //   worldId: "kdrama",
    //   categoryId: "historical-prince",
    //   name: "Crown Prince",
    //   description: "The burdened heir to the Joseon throne",
    //   image: "/images/kdrama/historical-prince/crown-prince.jpg"
    // },
    // {
    //   id: "kdrama-historical-prince-palace",
    //   worldId: "kdrama",
    //   categoryId: "historical-prince",
    //   name: "Palace Guard",
    //   description: "Loyal protector of the royal family",
    //   image: "/images/kdrama/historical-prince/palace-guard.jpg"
    // },
    // {
    //   id: "kdrama-historical-prince-warrior",
    //   worldId: "kdrama",
    //   categoryId: "historical-prince",
    //   name: "Warrior King",
    //   description: "A ruler forged in the fires of battle",
    //   image: "/images/kdrama/historical-prince/warrior-king.jpg"
    // },
    // {
    //   id: "kdrama-historical-prince-general",
    //   worldId: "kdrama",
    //   categoryId: "historical-prince",
    //   name: "Royal General",
    //   description: "Commanding the king's army with absolute honor",
    //   image: "/images/kdrama/historical-prince/royal-general.jpg"
    // },
    // {
    //   id: "kdrama-historical-prince-joseon",
    //   worldId: "kdrama",
    //   categoryId: "historical-prince",
    //   name: "Joseon Hero",
    //   description: "A legend whispered among the common folk",
    //   image: "/images/kdrama/historical-prince/joseon-hero.jpg"
    // },
    {
      id: "kdrama-historical-prince-scholar",
      worldId: "kdrama",
      categoryId: "historical-prince",
      name: "Ancient Scholar",
      description: "Wisdom and intelligence behind the palace walls",
      image: "/images/kdrama/historical-prince/ancient-scholar.jpg"
    },
    {
      id: "kdrama-historical-prince-wedding",
      worldId: "kdrama",
      categoryId: "historical-prince",
      name: "Royal Wedding",
      description: "A magnificent union of power and destiny",
      image: "/images/kdrama/historical-prince/royal-wedding.jpg"
    },
    {
      id: "kdrama-historical-prince-sword",
      worldId: "kdrama",
      categoryId: "historical-prince",
      name: "Sword Master",
      description: "Unmatched skill with a blade in ancient times",
      image: "/images/kdrama/historical-prince/sword-master.jpg"
    },
    {
      id: "kdrama-historical-prince-advisor",
      worldId: "kdrama",
      categoryId: "historical-prince",
      name: "Royal Advisor",
      description: "The strategic mind guiding the kingdom",
      image: "/images/kdrama/historical-prince/royal-advisor.jpg"
    },
    {
      id: "kdrama-historical-prince-emperor",
      worldId: "kdrama",
      categoryId: "historical-prince",
      name: "Emperor",
      description: "The absolute ruler of the vast empire",
      image: "/images/kdrama/historical-prince/emperor.jpg"
    }
  ],

  // ══════════════════════════════════════════════════════════════════════════
  // ANIME
  // ══════════════════════════════════════════════════════════════════════════

  // ── Shonen Action ─────────────────────────────────────────────────────────
  "anime-shonen-action": [
    {
      id: "anime-shonen-action-demon-slayer",
      worldId: "anime",
      categoryId: "shonen-action",
      name: "Demon Slayer Warrior",
      description: "Breathing techniques and unbreakable resolve",
      image: "/images/anime/shonen-action/demon-slayer-warrior.jpg"
    },
    {
      id: "anime-shonen-action-jujutsu",
      worldId: "anime",
      categoryId: "shonen-action",
      name: "Jujutsu Sorcerer",
      description: "Mastering cursed energy to defeat the absolute evil",
      image: "/images/anime/shonen-action/jujutsu-sorcerer.jpg"
    },
    {
      id: "anime-shonen-action-titan",
      worldId: "anime",
      categoryId: "shonen-action",
      name: "Titan Fighter",
      description: "Soaring through the skies to protect humanity",
      image: "/images/anime/shonen-action/titan-fighter.jpg"
    },
    {
      id: "anime-shonen-action-ninja",
      worldId: "anime",
      categoryId: "shonen-action",
      name: "Ninja Legend",
      description: "A path of shadow, honor, and immense jutsu",
      image: "/images/anime/shonen-action/ninja-legend.jpg"
    },
    {
      id: "anime-shonen-action-dragon",
      worldId: "anime",
      categoryId: "shonen-action",
      name: "Dragon Power Hero",
      description: "Unleashing energy blasts to save the universe",
      image: "/images/anime/shonen-action/dragon-power-hero.jpg"
    },
    {
      id: "anime-shonen-action-flame",
      worldId: "anime",
      categoryId: "shonen-action",
      name: "Flame Hashira",
      description: "Setting your heart ablaze in every battle",
      image: "/images/anime/shonen-action/flame-hashira.jpg"
    },
    {
      id: "anime-shonen-action-shadow",
      worldId: "anime",
      categoryId: "shonen-action",
      name: "Shadow Hunter",
      description: "Striking from the dark with lethal precision",
      image: "/images/anime/shonen-action/shadow-hunter.jpg"
    },
    {
      id: "anime-shonen-action-swordsman",
      worldId: "anime",
      categoryId: "shonen-action",
      name: "Elite Swordsman",
      description: "A single slash that cuts through dimensions",
      image: "/images/anime/shonen-action/elite-swordsman.jpg"
    },
    {
      id: "anime-shonen-action-tournament",
      worldId: "anime",
      categoryId: "shonen-action",
      name: "Tournament Champion",
      description: "Rising to the top of the martial arts world",
      image: "/images/anime/shonen-action/tournament-champion.jpg"
    },
    {
      id: "anime-shonen-action-ultimate",
      worldId: "anime",
      categoryId: "shonen-action",
      name: "Ultimate Hero",
      description: "The absolute pinnacle of power and justice",
      image: "/images/anime/shonen-action/ultimate-hero.jpg"
    }
  ],

  // ── Isekai Fantasy ────────────────────────────────────────────────────────
  "anime-isekai-fantasy": [
    // {
    //   id: "anime-isekai-fantasy-reincarnated",
    //   worldId: "anime",
    //   categoryId: "isekai-fantasy",
    //   name: "Reincarnated King",
    //   description: "Reborn in a magical world to rule it all",
    //   image: "/images/anime/isekai-fantasy/reincarnated-king.jpg"
    // },
    // {
    //   id: "anime-isekai-fantasy-dungeon",
    //   worldId: "anime",
    //   categoryId: "isekai-fantasy",
    //   name: "Dungeon Explorer",
    //   description: "Leveling up through perilous labyrinths",
    //   image: "/images/anime/isekai-fantasy/dungeon-explorer.jpg"
    // },
    // {
    //   id: "anime-isekai-fantasy-magic",
    //   worldId: "anime",
    //   categoryId: "isekai-fantasy",
    //   name: "Magic Academy Hero",
    //   description: "The overpowered transfer student",
    //   image: "/images/anime/isekai-fantasy/magic-academy-hero.jpg"
    // },
    // {
    //   id: "anime-isekai-fantasy-demon",
    //   worldId: "anime",
    //   categoryId: "isekai-fantasy",
    //   name: "Demon Lord",
    //   description: "Commanding the armies of the dark realm",
    //   image: "/images/anime/isekai-fantasy/demon-lord.jpg"
    // },
    // {
    //   id: "anime-isekai-fantasy-dragon",
    //   worldId: "anime",
    //   categoryId: "isekai-fantasy",
    //   name: "Dragon Rider",
    //   description: "Taming legendary beasts of the sky",
    //   image: "/images/anime/isekai-fantasy/dragon-rider.jpg"
    // },
    {
      id: "anime-isekai-fantasy-kingdom",
      worldId: "anime",
      categoryId: "isekai-fantasy",
      name: "Kingdom Savior",
      description: "The summoned hero destined to save the realm",
      image: "/images/anime/isekai-fantasy/kingdom-savior.jpg"
    },
    {
      id: "anime-isekai-fantasy-summoned",
      worldId: "anime",
      categoryId: "isekai-fantasy",
      name: "Summoned Warrior",
      description: "Pulled from Earth to wield the holy sword",
      image: "/images/anime/isekai-fantasy/summoned-warrior.jpg"
    },
    {
      id: "anime-isekai-fantasy-elf",
      worldId: "anime",
      categoryId: "isekai-fantasy",
      name: "Elf Guardian",
      description: "Protecting the ancient mystical forests",
      image: "/images/anime/isekai-fantasy/elf-guardian.jpg"
    },
    {
      id: "anime-isekai-fantasy-mage",
      worldId: "anime",
      categoryId: "isekai-fantasy",
      name: "Mage Supreme",
      description: "Mastering all elements and forbidden spells",
      image: "/images/anime/isekai-fantasy/mage-supreme.jpg"
    },
    {
      id: "anime-isekai-fantasy-adventurer",
      worldId: "anime",
      categoryId: "isekai-fantasy",
      name: "Fantasy Adventurer",
      description: "Completing guild quests with a loyal party",
      image: "/images/anime/isekai-fantasy/fantasy-adventurer.jpg"
    }
  ],

  // ── Mecha & Cyberpunk ─────────────────────────────────────────────────────
  "anime-mecha-cyberpunk": [
    // {
    //   id: "anime-mecha-cyberpunk-pilot",
    //   worldId: "anime",
    //   categoryId: "mecha-cyberpunk",
    //   name: "Mecha Pilot",
    //   description: "Synching mind and machine for ultimate combat",
    //   image: "/images/anime/mecha-cyberpunk/mecha-pilot.jpg"
    // },
    // {
    //   id: "anime-mecha-cyberpunk-gundam",
    //   worldId: "anime",
    //   categoryId: "mecha-cyberpunk",
    //   name: "Gundam Commander",
    //   description: "Leading the orbital fleet into battle",
    //   image: "/images/anime/mecha-cyberpunk/gundam-commander.jpg"
    // },
    // {
    //   id: "anime-mecha-cyberpunk-cyber",
    //   worldId: "anime",
    //   categoryId: "mecha-cyberpunk",
    //   name: "Cyber Soldier",
    //   description: "Augmented and ready for urban warfare",
    //   image: "/images/anime/mecha-cyberpunk/cyber-soldier.jpg"
    // },
    // {
    //   id: "anime-mecha-cyberpunk-ai",
    //   worldId: "anime",
    //   categoryId: "mecha-cyberpunk",
    //   name: "AI Warrior",
    //   description: "The perfect fusion of human spirit and synthetic power",
    //   image: "/images/anime/mecha-cyberpunk/ai-warrior.jpg"
    // },
    // {
    //   id: "anime-mecha-cyberpunk-future",
    //   worldId: "anime",
    //   categoryId: "mecha-cyberpunk",
    //   name: "Future Assassin",
    //   description: "Striking from the neon shadows of the metropolis",
    //   image: "/images/anime/mecha-cyberpunk/future-assassin.jpg"
    // },
    {
      id: "anime-mecha-cyberpunk-robot",
      worldId: "anime",
      categoryId: "mecha-cyberpunk",
      name: "Robot General",
      description: "Commanding the steel legions of tomorrow",
      image: "/images/anime/mecha-cyberpunk/robot-general.jpg"
    },
    {
      id: "anime-mecha-cyberpunk-space",
      worldId: "anime",
      categoryId: "mecha-cyberpunk",
      name: "Space Defender",
      description: "Protecting Earth colonies from extraterrestrial threats",
      image: "/images/anime/mecha-cyberpunk/space-defender.jpg"
    },
    {
      id: "anime-mecha-cyberpunk-neon",
      worldId: "anime",
      categoryId: "mecha-cyberpunk",
      name: "Neon City Hero",
      description: "Navigating the gritty underworld of the future",
      image: "/images/anime/mecha-cyberpunk/neon-city-hero.jpg"
    },
    {
      id: "anime-mecha-cyberpunk-samurai",
      worldId: "anime",
      categoryId: "mecha-cyberpunk",
      name: "Tech Samurai",
      description: "Wielding a plasma katana in a dystopian world",
      image: "/images/anime/mecha-cyberpunk/tech-samurai.jpg"
    },
    {
      id: "anime-mecha-cyberpunk-mercenary",
      worldId: "anime",
      categoryId: "mecha-cyberpunk",
      name: "Cyberpunk Mercenary",
      description: "Taking on the highest paying jobs in the megacity",
      image: "/images/anime/mecha-cyberpunk/cyberpunk-mercenary.jpg"
    }
  ],

  // ── School & Slice of Life ────────────────────────────────────────────────
  "anime-slice-of-life": [
    // {
    //   id: "anime-slice-of-life-hero",
    //   worldId: "anime",
    //   categoryId: "slice-of-life",
    //   name: "Anime School Hero",
    //   description: "The cool transfer student with a hidden past",
    //   image: "/images/anime/slice-of-life/anime-school-hero.jpg"
    // },
    // {
    //   id: "anime-slice-of-life-president",
    //   worldId: "anime",
    //   categoryId: "slice-of-life",
    //   name: "Student Council President",
    //   description: "Perfect grades, perfect looks, complicated heart",
    //   image: "/images/anime/slice-of-life/student-council-president.jpg"
    // },
    // {
    //   id: "anime-slice-of-life-sports",
    //   worldId: "anime",
    //   categoryId: "slice-of-life",
    //   name: "Sports Champion",
    //   description: "Aiming for the national tournament with the team",
    //   image: "/images/anime/slice-of-life/sports-champion.jpg"
    // },
    // {
    //   id: "anime-slice-of-life-cherry",
    //   worldId: "anime",
    //   categoryId: "slice-of-life",
    //   name: "Cherry Blossom Romance",
    //   description: "A fateful encounter under falling sakura petals",
    //   image: "/images/anime/slice-of-life/cherry-blossom-romance.jpg"
    // },
    // {
    //   id: "anime-slice-of-life-festival",
    //   worldId: "anime",
    //   categoryId: "slice-of-life",
    //   name: "School Festival Star",
    //   description: "Making unforgettable memories at the cultural festival",
    //   image: "/images/anime/slice-of-life/school-festival-star.jpg"
    // },
    {
      id: "anime-slice-of-life-graduation",
      worldId: "anime",
      categoryId: "slice-of-life",
      name: "Graduation Day",
      description: "Tears, smiles, and the second button of his uniform",
      image: "/images/anime/slice-of-life/graduation-day.jpg"
    },
    {
      id: "anime-slice-of-life-friendship",
      worldId: "anime",
      categoryId: "slice-of-life",
      name: "Friendship Squad",
      description: "Hanging out after school with the best friends forever",
      image: "/images/anime/slice-of-life/friendship-squad.jpg"
    },
    {
      id: "anime-slice-of-life-summer",
      worldId: "anime",
      categoryId: "slice-of-life",
      name: "Summer Vacation",
      description: "Beach trips, fireworks, and fleeting summer youth",
      image: "/images/anime/slice-of-life/summer-vacation.jpg"
    },
    {
      id: "anime-slice-of-life-campus",
      worldId: "anime",
      categoryId: "slice-of-life",
      name: "Campus Legend",
      description: "The most popular student everyone talks about",
      image: "/images/anime/slice-of-life/campus-legend.jpg"
    },
    {
      id: "anime-slice-of-life-first-love",
      worldId: "anime",
      categoryId: "slice-of-life",
      name: "First Love Story",
      description: "Shy glances and unspoken feelings in the classroom",
      image: "/images/anime/slice-of-life/first-love-story.jpg"
    }
  ],

  // ══════════════════════════════════════════════════════════════════════════
  // BUSINESS WORLD
  // ══════════════════════════════════════════════════════════════════════════

  // ── Startup King ──────────────────────────────────────────────────────────
  "business-startup-king": [
    // {
    //   id: "business-startup-king-unicorn",
    //   worldId: "business",
    //   categoryId: "startup-king",
    //   name: "Unicorn Founder",
    //   description: "Building the next billion-dollar startup",
    //   image: "/images/business/startup-king/unicorn-founder.jpg"
    // },
    // {
    //   id: "business-startup-king-ai",
    //   worldId: "business",
    //   categoryId: "startup-king",
    //   name: "AI Startup CEO",
    //   description: "Pioneering the future of artificial intelligence",
    //   image: "/images/business/startup-king/ai-startup-ceo.jpg"
    // },
    // {
    //   id: "business-startup-king-silicon",
    //   worldId: "business",
    //   categoryId: "startup-king",
    //   name: "Silicon Valley Visionary",
    //   description: "Disrupting the tech industry from a garage",
    //   image: "/images/business/startup-king/silicon-valley-visionary.jpg"
    // },
    // {
    //   id: "business-startup-king-pitch",
    //   worldId: "business",
    //   categoryId: "startup-king",
    //   name: "Startup Pitch Champion",
    //   description: "Winning over investors with a perfect deck",
    //   image: "/images/business/startup-king/startup-pitch-champion.jpg"
    // },
    // {
    //   id: "business-startup-king-disruptor",
    //   worldId: "business",
    //   categoryId: "startup-king",
    //   name: "Tech Disruptor",
    //   description: "Changing the rules of the game",
    //   image: "/images/business/startup-king/tech-disruptor.jpg"
    // },
    {
      id: "business-startup-king-venture",
      worldId: "business",
      categoryId: "startup-king",
      name: "Venture Builder",
      description: "Creating scalable businesses from scratch",
      image: "/images/business/startup-king/venture-builder.jpg"
    },
    {
      id: "business-startup-king-product",
      worldId: "business",
      categoryId: "startup-king",
      name: "Product Innovator",
      description: "Designing the products everyone wants",
      image: "/images/business/startup-king/product-innovator.jpg"
    },
    {
      id: "business-startup-king-saas",
      worldId: "business",
      categoryId: "startup-king",
      name: "SaaS Founder",
      description: "Scaling software to global markets",
      image: "/images/business/startup-king/saas-founder.jpg"
    },
    {
      id: "business-startup-king-rockstar",
      worldId: "business",
      categoryId: "startup-king",
      name: "Startup Rockstar",
      description: "The poster child of modern entrepreneurship",
      image: "/images/business/startup-king/startup-rockstar.jpg"
    },
    {
      id: "business-startup-king-future",
      worldId: "business",
      categoryId: "startup-king",
      name: "Future Entrepreneur",
      description: "Starting the journey to corporate greatness",
      image: "/images/business/startup-king/future-entrepreneur.jpg"
    }
  ],

  // ── CEO Mindset ───────────────────────────────────────────────────────────
  "business-ceo-mindset": [
    // {
    //   id: "business-ceo-mindset-fortune",
    //   worldId: "business",
    //   categoryId: "ceo-mindset",
    //   name: "Fortune 500 CEO",
    //   description: "Leading the world's most powerful companies",
    //   image: "/images/business/ceo-mindset/fortune-500-ceo.jpg"
    // },
    // {
    //   id: "business-ceo-mindset-boardroom",
    //   worldId: "business",
    //   categoryId: "ceo-mindset",
    //   name: "Boardroom Leader",
    //   description: "Commanding respect in every executive meeting",
    //   image: "/images/business/ceo-mindset/boardroom-leader.jpg"
    // },
    // {
    //   id: "business-ceo-mindset-global",
    //   worldId: "business",
    //   categoryId: "ceo-mindset",
    //   name: "Global Executive",
    //   description: "Managing international operations flawlessly",
    //   image: "/images/business/ceo-mindset/global-executive.jpg"
    // },
    // {
    //   id: "business-ceo-mindset-president",
    //   worldId: "business",
    //   categoryId: "ceo-mindset",
    //   name: "Corporate President",
    //   description: "The ultimate authority in the organization",
    //   image: "/images/business/ceo-mindset/corporate-president.jpg"
    // },
    // {
    //   id: "business-ceo-mindset-strategist",
    //   worldId: "business",
    //   categoryId: "ceo-mindset",
    //   name: "Business Strategist",
    //   description: "Always ten steps ahead of the competition",
    //   image: "/images/business/ceo-mindset/business-strategist.jpg"
    // },
    {
      id: "business-ceo-mindset-titan",
      worldId: "business",
      categoryId: "ceo-mindset",
      name: "Industry Titan",
      description: "A monumental force in the business world",
      image: "/images/business/ceo-mindset/industry-titan.jpg"
    },
    {
      id: "business-ceo-mindset-visionary",
      worldId: "business",
      categoryId: "ceo-mindset",
      name: "Visionary Leader",
      description: "Seeing the future and building it today",
      image: "/images/business/ceo-mindset/visionary-leader.jpg"
    },
    {
      id: "business-ceo-mindset-chairman",
      worldId: "business",
      categoryId: "ceo-mindset",
      name: "Chairman",
      description: "Overseeing the grand vision of the empire",
      image: "/images/business/ceo-mindset/chairman.jpg"
    },
    {
      id: "business-ceo-mindset-boss",
      worldId: "business",
      categoryId: "ceo-mindset",
      name: "Executive Boss",
      description: "Making the tough calls that matter",
      image: "/images/business/ceo-mindset/executive-boss.jpg"
    },
    {
      id: "business-ceo-mindset-billion",
      worldId: "business",
      categoryId: "ceo-mindset",
      name: "Next Billion Dollar CEO",
      description: "On the fast track to ultimate success",
      image: "/images/business/ceo-mindset/next-billion-dollar-ceo.jpg"
    }
  ],

  // ── Shark Tank ────────────────────────────────────────────────────────────
  "business-shark-tank": [
    // {
    //   id: "business-shark-tank-startup",
    //   worldId: "business",
    //   categoryId: "shark-tank",
    //   name: "Startup Investor",
    //   description: "Spotting the next big thing before anyone else",
    //   image: "/images/business/shark-tank/startup-investor.jpg"
    // },
    // {
    //   id: "business-shark-tank-angel",
    //   worldId: "business",
    //   categoryId: "shark-tank",
    //   name: "Angel Investor",
    //   description: "Providing the crucial seed money for dreams",
    //   image: "/images/business/shark-tank/angel-investor.jpg"
    // },
    // {
    //   id: "business-shark-tank-vc",
    //   worldId: "business",
    //   categoryId: "shark-tank",
    //   name: "Venture Capitalist",
    //   description: "Writing the checks that change the world",
    //   image: "/images/business/shark-tank/venture-capitalist.jpg"
    // },
    // {
    //   id: "business-shark-tank-mentor",
    //   worldId: "business",
    //   categoryId: "shark-tank",
    //   name: "Business Mentor",
    //   description: "Guiding young founders to massive success",
    //   image: "/images/business/shark-tank/business-mentor.jpg"
    // },
    // {
    //   id: "business-shark-tank-funding",
    //   worldId: "business",
    //   categoryId: "shark-tank",
    //   name: "Funding Expert",
    //   description: "Master of valuation and terms sheets",
    //   image: "/images/business/shark-tank/funding-expert.jpg"
    // },
    {
      id: "business-shark-tank-deal",
      worldId: "business",
      categoryId: "shark-tank",
      name: "Deal Maker",
      description: "Closing the most complicated acquisitions",
      image: "/images/business/shark-tank/deal-maker.jpg"
    },
    {
      id: "business-shark-tank-guru",
      worldId: "business",
      categoryId: "shark-tank",
      name: "Investment Guru",
      description: "An unmatched eye for profitable ventures",
      image: "/images/business/shark-tank/investment-guru.jpg"
    },
    {
      id: "business-shark-tank-judge",
      worldId: "business",
      categoryId: "shark-tank",
      name: "Startup Judge",
      description: "Evaluating pitches with ruthless precision",
      image: "/images/business/shark-tank/startup-judge.jpg"
    },
    {
      id: "business-shark-tank-equity",
      worldId: "business",
      categoryId: "shark-tank",
      name: "Private Equity King",
      description: "Buying, scaling, and dominating markets",
      image: "/images/business/shark-tank/private-equity-king.jpg"
    },
    {
      id: "business-shark-tank-acquisition",
      worldId: "business",
      categoryId: "shark-tank",
      name: "Startup Acquisition Boss",
      description: "Absorbing the competition to grow the empire",
      image: "/images/business/shark-tank/startup-acquisition-boss.jpg"
    }
  ],

  // ── Billionaire Vision ────────────────────────────────────────────────────
  "business-billionaire-vision": [
    // {
    //   id: "business-billionaire-vision-jet",
    //   worldId: "business",
    //   categoryId: "billionaire-vision",
    //   name: "Private Jet Owner",
    //   description: "Closing deals at 40,000 feet",
    //   image: "/images/business/billionaire-vision/private-jet-owner.jpg"
    // },
    // {
    //   id: "business-billionaire-vision-forbes",
    //   worldId: "business",
    //   categoryId: "billionaire-vision",
    //   name: "Forbes Cover Star",
    //   description: "The face of global wealth and success",
    //   image: "/images/business/billionaire-vision/forbes-cover-star.jpg"
    // },
    // {
    //   id: "business-billionaire-vision-global",
    //   worldId: "business",
    //   categoryId: "billionaire-vision",
    //   name: "Global Billionaire",
    //   description: "Influence that spans across continents",
    //   image: "/images/business/billionaire-vision/global-billionaire.jpg"
    // },
    // {
    //   id: "business-billionaire-vision-penthouse",
    //   worldId: "business",
    //   categoryId: "billionaire-vision",
    //   name: "Luxury Penthouse Owner",
    //   description: "Living at the very top of the world",
    //   image: "/images/business/billionaire-vision/luxury-penthouse-owner.jpg"
    // },
    // {
    //   id: "business-billionaire-vision-tech",
    //   worldId: "business",
    //   categoryId: "billionaire-vision",
    //   name: "Tech Mogul",
    //   description: "Controlling the platforms that shape society",
    //   image: "/images/business/billionaire-vision/tech-mogul.jpg"
    // },
    {
      id: "business-billionaire-vision-wealth",
      worldId: "business",
      categoryId: "billionaire-vision",
      name: "Wealth Empire Builder",
      description: "Generational riches accumulated by pure grit",
      image: "/images/business/billionaire-vision/wealth-empire-builder.jpg"
    },
    {
      id: "business-billionaire-vision-magnate",
      worldId: "business",
      categoryId: "billionaire-vision",
      name: "Business Magnate",
      description: "An untouchable titan of commerce",
      image: "/images/business/billionaire-vision/business-magnate.jpg"
    },
    {
      id: "business-billionaire-vision-yacht",
      worldId: "business",
      categoryId: "billionaire-vision",
      name: "Yacht Lifestyle",
      description: "Sailing the seas of immense luxury",
      image: "/images/business/billionaire-vision/yacht-lifestyle.jpg"
    },
    {
      id: "business-billionaire-vision-selfmade",
      worldId: "business",
      categoryId: "billionaire-vision",
      name: "Self-Made Billionaire",
      description: "Starting from nothing to conquer everything",
      image: "/images/business/billionaire-vision/self-made-billionaire.jpg"
    },
    {
      id: "business-billionaire-vision-richest",
      worldId: "business",
      categoryId: "billionaire-vision",
      name: "World's Richest Visionary",
      description: "Pioneering humanity's next giant leap",
      image: "/images/business/billionaire-vision/worlds-richest-visionary.jpg"
    }
  ],

  // ── Corporate Legend ──────────────────────────────────────────────────────
  "business-corporate-legend": [
    // {
    //   id: "business-corporate-legend-wallstreet",
    //   worldId: "business",
    //   categoryId: "corporate-legend",
    //   name: "Wall Street Titan",
    //   description: "Master of the financial markets",
    //   image: "/images/business/corporate-legend/wall-street-titan.jpg"
    // },
    // {
    //   id: "business-corporate-legend-empire",
    //   worldId: "business",
    //   categoryId: "corporate-legend",
    //   name: "Corporate Empire Builder",
    //   description: "Constructing a legacy that outlasts time",
    //   image: "/images/business/corporate-legend/corporate-empire-builder.jpg"
    // },
    // {
    //   id: "business-corporate-legend-leader",
    //   worldId: "business",
    //   categoryId: "corporate-legend",
    //   name: "Global Business Leader",
    //   description: "Respected worldwide for strategic brilliance",
    //   image: "/images/business/corporate-legend/global-business-leader.jpg"
    // },
    // {
    //   id: "business-corporate-legend-boardroom",
    //   worldId: "business",
    //   categoryId: "corporate-legend",
    //   name: "Boardroom King",
    //   description: "Controlling the narrative at the highest level",
    //   image: "/images/business/corporate-legend/boardroom-king.jpg"
    // },
    // {
    //   id: "business-corporate-legend-mnc",
    //   worldId: "business",
    //   categoryId: "corporate-legend",
    //   name: "MNC President",
    //   description: "Running the largest multinational corporation",
    //   image: "/images/business/corporate-legend/mnc-president.jpg"
    // },
    {
      id: "business-corporate-legend-pioneer",
      worldId: "business",
      categoryId: "corporate-legend",
      name: "Industry Pioneer",
      description: "The one who paved the way for everyone else",
      image: "/images/business/corporate-legend/industry-pioneer.jpg"
    },
    {
      id: "business-corporate-legend-legend",
      worldId: "business",
      categoryId: "corporate-legend",
      name: "Corporate Legend",
      description: "A name that will be studied in business schools",
      image: "/images/business/corporate-legend/corporate-legend.jpg"
    },
    {
      id: "business-corporate-legend-chairman",
      worldId: "business",
      categoryId: "corporate-legend",
      name: "Fortune Chairman",
      description: "Sitting at the absolute top of the corporate ladder",
      image: "/images/business/corporate-legend/fortune-chairman.jpg"
    },
    {
      id: "business-corporate-legend-icon",
      worldId: "business",
      categoryId: "corporate-legend",
      name: "Business Icon",
      description: "The gold standard of corporate success",
      image: "/images/business/corporate-legend/business-icon.jpg"
    },
    {
      id: "business-corporate-legend-legacy",
      worldId: "business",
      categoryId: "corporate-legend",
      name: "Legacy Builder",
      description: "Ensuring the company thrives for a century",
      image: "/images/business/corporate-legend/legacy-builder.jpg"
    }
  ],

  // ══════════════════════════════════════════════════════════════════════════
  // STUDENT LIFE
  // ══════════════════════════════════════════════════════════════════════════

  // ── Graduation Day ────────────────────────────────────────────────────────
  "student-graduation-day": [
    // {
    //   id: "student-graduation-day-topper",
    //   worldId: "student",
    //   categoryId: "graduation-day",
    //   name: "University Topper",
    //   description: "Highest honors and infinite possibilities",
    //   image: "/images/student/graduation-day/university-topper.jpg"
    // },
    // {
    //   id: "student-graduation-day-gold",
    //   worldId: "student",
    //   categoryId: "graduation-day",
    //   name: "Gold Medalist",
    //   description: "Shining bright on the biggest stage",
    //   image: "/images/student/graduation-day/gold-medalist.jpg"
    // },
    // {
    //   id: "student-graduation-day-convocation",
    //   worldId: "student",
    //   categoryId: "graduation-day",
    //   name: "Convocation Star",
    //   description: "The center of attention on graduation day",
    //   image: "/images/student/graduation-day/convocation-star.jpg"
    // },
    // {
    //   id: "student-graduation-day-ivy",
    //   worldId: "student",
    //   categoryId: "graduation-day",
    //   name: "Ivy League Graduate",
    //   description: "Joining the ranks of the elite alumni",
    //   image: "/images/student/graduation-day/ivy-league-graduate.jpg"
    // },
    // {
    //   id: "student-graduation-day-degree",
    //   worldId: "student",
    //   categoryId: "graduation-day",
    //   name: "Degree Ceremony Hero",
    //   description: "Walking the stage with immense pride",
    //   image: "/images/student/graduation-day/degree-ceremony-hero.jpg"
    // },
    {
      id: "student-graduation-day-champion",
      worldId: "student",
      categoryId: "graduation-day",
      name: "Academic Champion",
      description: "Overcoming every academic hurdle",
      image: "/images/student/graduation-day/academic-champion.jpg"
    },
    {
      id: "student-graduation-day-scholarship",
      worldId: "student",
      categoryId: "graduation-day",
      name: "Scholarship Winner",
      description: "Rewriting the future through brilliance",
      image: "/images/student/graduation-day/scholarship-winner.jpg"
    },
    {
      id: "student-graduation-day-research",
      worldId: "student",
      categoryId: "graduation-day",
      name: "Research Scholar",
      description: "Defending the thesis and advancing human knowledge",
      image: "/images/student/graduation-day/research-scholar.jpg"
    },
    {
      id: "student-graduation-day-future",
      worldId: "student",
      categoryId: "graduation-day",
      name: "Future Leader",
      description: "Equipped to change the world",
      image: "/images/student/graduation-day/future-leader.jpg"
    },
    {
      id: "student-graduation-day-legend",
      worldId: "student",
      categoryId: "graduation-day",
      name: "Graduation Day Legend",
      description: "A moment immortalized in time",
      image: "/images/student/graduation-day/graduation-day-legend.jpg"
    }
  ],

  // ── Library Legend ────────────────────────────────────────────────────────
  "student-library-legend": [
    // {
    //   id: "student-library-legend-upsc",
    //   worldId: "student",
    //   categoryId: "library-legend",
    //   name: "UPSC Aspirant",
    //   description: "Endless dedication for the ultimate goal",
    //   image: "/images/student/library-legend/upsc-aspirant.jpg"
    // },
    // {
    //   id: "student-library-legend-ias",
    //   worldId: "student",
    //   categoryId: "library-legend",
    //   name: "IAS Topper",
    //   description: "Cracking the toughest exam in the nation",
    //   image: "/images/student/library-legend/ias-topper.jpg"
    // },
    // {
    //   id: "student-library-legend-research",
    //   worldId: "student",
    //   categoryId: "library-legend",
    //   name: "Research Genius",
    //   description: "Lost in papers, finding brilliance",
    //   image: "/images/student/library-legend/research-genius.jpg"
    // },
    // {
    //   id: "student-library-legend-bookworm",
    //   worldId: "student",
    //   categoryId: "library-legend",
    //   name: "Bookworm Champion",
    //   description: "Mastering every syllabus effortlessly",
    //   image: "/images/student/library-legend/bookworm-champion.jpg"
    // },
    // {
    //   id: "student-library-legend-knowledge",
    //   worldId: "student",
    //   categoryId: "library-legend",
    //   name: "Knowledge Master",
    //   description: "The answer key to every question",
    //   image: "/images/student/library-legend/knowledge-master.jpg"
    // },
    {
      id: "student-library-legend-scientist",
      worldId: "student",
      categoryId: "library-legend",
      name: "Future Scientist",
      description: "Analyzing data to rewrite physics",
      image: "/images/student/library-legend/future-scientist.jpg"
    },
    {
      id: "student-library-legend-exam",
      worldId: "student",
      categoryId: "library-legend",
      name: "Exam Warrior",
      description: "Thriving under academic pressure",
      image: "/images/student/library-legend/exam-warrior.jpg"
    },
    {
      id: "student-library-legend-study",
      worldId: "student",
      categoryId: "library-legend",
      name: "Study Icon",
      description: "The aesthetic late-night study session",
      image: "/images/student/library-legend/study-icon.jpg"
    },
    {
      id: "student-library-legend-academic",
      worldId: "student",
      categoryId: "library-legend",
      name: "Academic Legend",
      description: "Perfect GPA, zero stress",
      image: "/images/student/library-legend/academic-legend.jpg"
    },
    {
      id: "student-library-legend-scholar",
      worldId: "student",
      categoryId: "library-legend",
      name: "Scholar of the Year",
      description: "Recognized for unparalleled intellect",
      image: "/images/student/library-legend/scholar-of-the-year.jpg"
    }
  ],

  // ── Code Warrior ──────────────────────────────────────────────────────────
  "student-code-warrior": [
    // {
    //   id: "student-code-warrior-ai",
    //   worldId: "student",
    //   categoryId: "code-warrior",
    //   name: "AI Engineer",
    //   description: "Training models that think for themselves",
    //   image: "/images/student/code-warrior/ai-engineer.jpg"
    // },
    // {
    //   id: "student-code-warrior-software",
    //   worldId: "student",
    //   categoryId: "code-warrior",
    //   name: "Software Developer",
    //   description: "Turning logic into seamless applications",
    //   image: "/images/student/code-warrior/software-developer.jpg"
    // },
    // {
    //   id: "student-code-warrior-hackathon",
    //   worldId: "student",
    //   categoryId: "code-warrior",
    //   name: "Hackathon Winner",
    //   description: "Coding for 48 hours straight to victory",
    //   image: "/images/student/code-warrior/hackathon-winner.jpg"
    // },
    // {
    //   id: "student-code-warrior-fullstack",
    //   worldId: "student",
    //   categoryId: "code-warrior",
    //   name: "Full Stack Developer",
    //   description: "Mastering the front end and the back end",
    //   image: "/images/student/code-warrior/full-stack-developer.jpg"
    // },
    // {
    //   id: "student-code-warrior-cyber",
    //   worldId: "student",
    //   categoryId: "code-warrior",
    //   name: "Cyber Security Expert",
    //   description: "Defending the network from dark threats",
    //   image: "/images/student/code-warrior/cyber-security-expert.jpg"
    // },
    {
      id: "student-code-warrior-startup",
      worldId: "student",
      categoryId: "code-warrior",
      name: "Startup Coder",
      description: "Building the MVP in a college dorm",
      image: "/images/student/code-warrior/startup-coder.jpg"
    },
    {
      id: "student-code-warrior-data",
      worldId: "student",
      categoryId: "code-warrior",
      name: "Data Scientist",
      description: "Extracting pure gold from massive datasets",
      image: "/images/student/code-warrior/data-scientist.jpg"
    },
    {
      id: "student-code-warrior-ml",
      worldId: "student",
      categoryId: "code-warrior",
      name: "Machine Learning Engineer",
      description: "Optimizing algorithms for the future",
      image: "/images/student/code-warrior/machine-learning-engineer.jpg"
    },
    {
      id: "student-code-warrior-innovator",
      worldId: "student",
      categoryId: "code-warrior",
      name: "Tech Innovator",
      description: "Writing the code that changes everything",
      image: "/images/student/code-warrior/tech-innovator.jpg"
    },
    {
      id: "student-code-warrior-champion",
      worldId: "student",
      categoryId: "code-warrior",
      name: "Coding Champion",
      description: "Zero bugs, infinite scale",
      image: "/images/student/code-warrior/coding-champion.jpg"
    }
  ],

  // ── Sporting Hero ─────────────────────────────────────────────────────────
  "student-sporting-hero": [
    // {
    //   id: "student-sporting-hero-football",
    //   worldId: "student",
    //   categoryId: "sporting-hero",
    //   name: "Football Star",
    //   description: "Scoring the winning goal under the lights",
    //   image: "/images/student/sporting-hero/football-star.jpg"
    // },
    // {
    //   id: "student-sporting-hero-cricket",
    //   worldId: "student",
    //   categoryId: "sporting-hero",
    //   name: "Cricket Champion",
    //   description: "Hitting it out of the park for the college team",
    //   image: "/images/student/sporting-hero/cricket-champion.jpg"
    // },
    // {
    //   id: "student-sporting-hero-olympic",
    //   worldId: "student",
    //   categoryId: "sporting-hero",
    //   name: "Olympic Athlete",
    //   description: "Training relentlessly for global glory",
    //   image: "/images/student/sporting-hero/olympic-athlete.jpg"
    // },
    // {
    //   id: "student-sporting-hero-marathon",
    //   worldId: "student",
    //   categoryId: "sporting-hero",
    //   name: "Marathon Runner",
    //   description: "Pushing the limits of human endurance",
    //   image: "/images/student/sporting-hero/marathon-runner.jpg"
    // },
    // {
    //   id: "student-sporting-hero-basketball",
    //   worldId: "student",
    //   categoryId: "sporting-hero",
    //   name: "Basketball Hero",
    //   description: "The buzzer-beater shot that won it all",
    //   image: "/images/student/sporting-hero/basketball-hero.jpg"
    // },
    {
      id: "student-sporting-hero-esports",
      worldId: "student",
      categoryId: "sporting-hero",
      name: "Esports Champion",
      description: "Dominating the digital arena with unmatched reflexes",
      image: "/images/student/sporting-hero/esports-champion.jpg"
    },
    {
      id: "student-sporting-hero-badminton",
      worldId: "student",
      categoryId: "sporting-hero",
      name: "Badminton Star",
      description: "Agility, speed, and the perfect smash",
      image: "/images/student/sporting-hero/badminton-star.jpg"
    },
    {
      id: "student-sporting-hero-fitness",
      worldId: "student",
      categoryId: "sporting-hero",
      name: "Fitness Icon",
      description: "Inspiring the campus with a perfect physique",
      image: "/images/student/sporting-hero/fitness-icon.jpg"
    },
    {
      id: "student-sporting-hero-national",
      worldId: "student",
      categoryId: "sporting-hero",
      name: "National Player",
      description: "Representing the state with ultimate pride",
      image: "/images/student/sporting-hero/national-player.jpg"
    },
    {
      id: "student-sporting-hero-legend",
      worldId: "student",
      categoryId: "sporting-hero",
      name: "Sports Legend",
      description: "A legacy of victories that will never be forgotten",
      image: "/images/student/sporting-hero/sports-legend.jpg"
    }
  ],

  // ── Campus Star ───────────────────────────────────────────────────────────
  "student-campus-star": [
    // {
    //   id: "student-campus-star-leader",
    //   worldId: "student",
    //   categoryId: "campus-star",
    //   name: "Student Leader",
    //   description: "Voice of the students, inspiring change",
    //   image: "/images/student/campus-star/student-leader.jpg"
    // },
    // {
    //   id: "student-campus-star-influencer",
    //   worldId: "student",
    //   categoryId: "campus-star",
    //   name: "College Influencer",
    //   description: "Setting trends and going viral on campus",
    //   image: "/images/student/campus-star/college-influencer.jpg"
    // },
    // {
    //   id: "student-campus-star-cultural",
    //   worldId: "student",
    //   categoryId: "campus-star",
    //   name: "Cultural Festival Hero",
    //   description: "Lighting up the stage at the annual fest",
    //   image: "/images/student/campus-star/cultural-festival-hero.jpg"
    // },
    // {
    //   id: "student-campus-star-debate",
    //   worldId: "student",
    //   categoryId: "campus-star",
    //   name: "Debate Champion",
    //   description: "Winning arguments with flawless logic",
    //   image: "/images/student/campus-star/debate-champion.jpg"
    // },
    // {
    //   id: "student-campus-star-dance",
    //   worldId: "student",
    //   categoryId: "campus-star",
    //   name: "Dance Society Star",
    //   description: "Choreographing the most spectacular routines",
    //   image: "/images/student/campus-star/dance-society-star.jpg"
    // },
    {
      id: "student-campus-star-music",
      worldId: "student",
      categoryId: "campus-star",
      name: "Music Club Leader",
      description: "Rocking the crowd with original tracks",
      image: "/images/student/campus-star/music-club-leader.jpg"
    },
    {
      id: "student-campus-star-celebrity",
      worldId: "student",
      categoryId: "campus-star",
      name: "Campus Celebrity",
      description: "Everyone knows the name, everyone wants to be friends",
      image: "/images/student/campus-star/campus-celebrity.jpg"
    },
    {
      id: "student-campus-star-president",
      worldId: "student",
      categoryId: "campus-star",
      name: "Club President",
      description: "Organizing the best events of the year",
      image: "/images/student/campus-star/club-president.jpg"
    },
    {
      id: "student-campus-star-organizer",
      worldId: "student",
      categoryId: "campus-star",
      name: "Event Organizer",
      description: "The mastermind behind the epic parties",
      image: "/images/student/campus-star/event-organizer.jpg"
    },
    {
      id: "student-campus-star-youth",
      worldId: "student",
      categoryId: "campus-star",
      name: "Youth Icon",
      description: "Embodying the spirit of the new generation",
      image: "/images/student/campus-star/youth-icon.jpg"
    }
  ],

  // ══════════════════════════════════════════════════════════════════════════
  // FUTURE CAREERS
  // ══════════════════════════════════════════════════════════════════════════

  // ── Mars Colonist ─────────────────────────────────────────────────────────
  "careers-mars-colonist": [
    // {
    //   id: "careers-mars-colonist-commander",
    //   worldId: "careers",
    //   categoryId: "mars-colonist",
    //   name: "Mars Commander",
    //   description: "Leading the first settlement on the red planet",
    //   image: "/images/careers/mars-colonist/mars-commander.jpg"
    // },
    // {
    //   id: "careers-mars-colonist-leader",
    //   worldId: "careers",
    //   categoryId: "mars-colonist",
    //   name: "Space Colony Leader",
    //   description: "Building a civilization out of martian dust",
    //   image: "/images/careers/mars-colonist/space-colony-leader.jpg"
    // },
    // {
    //   id: "careers-mars-colonist-explorer",
    //   worldId: "careers",
    //   categoryId: "mars-colonist",
    //   name: "Red Planet Explorer",
    //   description: "Discovering ancient secrets beneath the dunes",
    //   image: "/images/careers/mars-colonist/red-planet-explorer.jpg"
    // },
    // {
    //   id: "careers-mars-colonist-pioneer",
    //   worldId: "careers",
    //   categoryId: "mars-colonist",
    //   name: "Interplanetary Pioneer",
    //   description: "Pushing humanity further into the cosmos",
    //   image: "/images/careers/mars-colonist/interplanetary-pioneer.jpg"
    // },
    // {
    //   id: "careers-mars-colonist-terraforming",
    //   worldId: "careers",
    //   categoryId: "mars-colonist",
    //   name: "Terraforming Expert",
    //   description: "Turning a barren rock into a green oasis",
    //   image: "/images/careers/mars-colonist/terraforming-expert.jpg"
    // },
    {
      id: "careers-mars-colonist-hero",
      worldId: "careers",
      categoryId: "mars-colonist",
      name: "Space Settlement Hero",
      description: "Protecting the colony from deep space anomalies",
      image: "/images/careers/mars-colonist/space-settlement-hero.jpg"
    },
    {
      id: "careers-mars-colonist-astronaut",
      worldId: "careers",
      categoryId: "mars-colonist",
      name: "Astronaut Elite",
      description: "The most decorated pilot of the space fleet",
      image: "/images/careers/mars-colonist/astronaut-elite.jpg"
    },
    {
      id: "careers-mars-colonist-galaxy",
      worldId: "careers",
      categoryId: "mars-colonist",
      name: "Galaxy Explorer",
      description: "Charting unknown star systems",
      image: "/images/careers/mars-colonist/galaxy-explorer.jpg"
    },
    {
      id: "careers-mars-colonist-lunar",
      worldId: "careers",
      categoryId: "mars-colonist",
      name: "Lunar Mission Commander",
      description: "Establishing the crucial moon base",
      image: "/images/careers/mars-colonist/lunar-mission-commander.jpg"
    },
    {
      id: "careers-mars-colonist-adventurer",
      worldId: "careers",
      categoryId: "mars-colonist",
      name: "Cosmic Adventurer",
      description: "Seeking thrills in zero gravity",
      image: "/images/careers/mars-colonist/cosmic-adventurer.jpg"
    }
  ],

  // ── Cyberpunk Architect ───────────────────────────────────────────────────
  "careers-cyberpunk-architect": [
    // {
    //   id: "careers-cyberpunk-architect-smart",
    //   worldId: "careers",
    //   categoryId: "cyberpunk-architect",
    //   name: "Smart City Designer",
    //   description: "Engineering ecosystems of pure digital efficiency",
    //   image: "/images/careers/cyberpunk-architect/smart-city-designer.jpg"
    // },
    // {
    //   id: "careers-cyberpunk-architect-metaverse",
    //   worldId: "careers",
    //   categoryId: "cyberpunk-architect",
    //   name: "Metaverse Creator",
    //   description: "Building virtual worlds that rival reality",
    //   image: "/images/careers/cyberpunk-architect/metaverse-creator.jpg"
    // },
    // {
    //   id: "careers-cyberpunk-architect-future",
    //   worldId: "careers",
    //   categoryId: "cyberpunk-architect",
    //   name: "Future Architect",
    //   description: "Designing skyscrapers that pierce the stratosphere",
    //   image: "/images/careers/cyberpunk-architect/future-architect.jpg"
    // },
    // {
    //   id: "careers-cyberpunk-architect-neon",
    //   worldId: "careers",
    //   categoryId: "cyberpunk-architect",
    //   name: "Neon City Builder",
    //   description: "Illuminating the dark dystopia with holographic art",
    //   image: "/images/careers/cyberpunk-architect/neon-city-builder.jpg"
    // },
    // {
    //   id: "careers-cyberpunk-architect-urban",
    //   worldId: "careers",
    //   categoryId: "cyberpunk-architect",
    //   name: "Urban Futurist",
    //   description: "Predicting and building the evolution of living",
    //   image: "/images/careers/cyberpunk-architect/urban-futurist.jpg"
    // },
    {
      id: "careers-cyberpunk-architect-digital",
      worldId: "careers",
      categoryId: "cyberpunk-architect",
      name: "Digital World Creator",
      description: "Crafting fully immersive augmented realities",
      image: "/images/careers/cyberpunk-architect/digital-world-creator.jpg"
    },
    {
      id: "careers-cyberpunk-architect-planner",
      worldId: "careers",
      categoryId: "cyberpunk-architect",
      name: "Cyber City Planner",
      description: "Managing the endless flow of data and traffic",
      image: "/images/careers/cyberpunk-architect/cyber-city-planner.jpg"
    },
    {
      id: "careers-cyberpunk-architect-genius",
      worldId: "careers",
      categoryId: "cyberpunk-architect",
      name: "Tech Infrastructure Genius",
      description: "Powering the megacity with infinite clean energy",
      image: "/images/careers/cyberpunk-architect/tech-infrastructure-genius.jpg"
    },
    {
      id: "careers-cyberpunk-architect-designer",
      worldId: "careers",
      categoryId: "cyberpunk-architect",
      name: "Futuristic Designer",
      description: "Blending brutalism with high-end tech",
      image: "/images/careers/cyberpunk-architect/futuristic-designer.jpg"
    },
    {
      id: "careers-cyberpunk-architect-engineer",
      worldId: "careers",
      categoryId: "cyberpunk-architect",
      name: "AI City Engineer",
      description: "Maintaining the algorithms that keep the city alive",
      image: "/images/careers/cyberpunk-architect/ai-city-engineer.jpg"
    }
  ],

  // ── AI Overlord ───────────────────────────────────────────────────────────
  "careers-ai-overlord": [
    // {
    //   id: "careers-ai-overlord-research",
    //   worldId: "careers",
    //   categoryId: "ai-overlord",
    //   name: "AI Research Scientist",
    //   description: "Pushing the boundaries of machine consciousness",
    //   image: "/images/careers/ai-overlord/ai-research-scientist.jpg"
    // },
    // {
    //   id: "careers-ai-overlord-agi",
    //   worldId: "careers",
    //   categoryId: "ai-overlord",
    //   name: "AGI Creator",
    //   description: "Birthing the first Artificial General Intelligence",
    //   image: "/images/careers/ai-overlord/agi-creator.jpg"
    // },
    // {
    //   id: "careers-ai-overlord-robotics",
    //   worldId: "careers",
    //   categoryId: "ai-overlord",
    //   name: "Robotics Commander",
    //   description: "Leading a workforce of sentient machines",
    //   image: "/images/careers/ai-overlord/robotics-commander.jpg"
    // },
    // {
    //   id: "careers-ai-overlord-architect",
    //   worldId: "careers",
    //   categoryId: "ai-overlord",
    //   name: "Machine Intelligence Architect",
    //   description: "Designing the synapses of the global brain",
    //   image: "/images/careers/ai-overlord/machine-intelligence-architect.jpg"
    // },
    // {
    //   id: "careers-ai-overlord-neural",
    //   worldId: "careers",
    //   categoryId: "ai-overlord",
    //   name: "Neural Network Master",
    //   description: "Optimizing the deep learning algorithms of the future",
    //   image: "/images/careers/ai-overlord/neural-network-master.jpg"
    // },
    {
      id: "careers-ai-overlord-leader",
      worldId: "careers",
      categoryId: "ai-overlord",
      name: "Future Tech Leader",
      description: "Guiding society through the singularity",
      image: "/images/careers/ai-overlord/future-tech-leader.jpg"
    },
    {
      id: "careers-ai-overlord-empire",
      worldId: "careers",
      categoryId: "ai-overlord",
      name: "AI Empire Builder",
      description: "Monopolizing the artificial intelligence sector",
      image: "/images/careers/ai-overlord/ai-empire-builder.jpg"
    },
    {
      id: "careers-ai-overlord-brain",
      worldId: "careers",
      categoryId: "ai-overlord",
      name: "Digital Brain Creator",
      description: "Uploading human minds to the digital realm",
      image: "/images/careers/ai-overlord/digital-brain-creator.jpg"
    },
    {
      id: "careers-ai-overlord-quantum",
      worldId: "careers",
      categoryId: "ai-overlord",
      name: "Quantum AI Expert",
      description: "Merging quantum computing with deep learning",
      image: "/images/careers/ai-overlord/quantum-ai-expert.jpg"
    },
    {
      id: "careers-ai-overlord-visionary",
      worldId: "careers",
      categoryId: "ai-overlord",
      name: "AI Visionary",
      description: "Seeing the infinite possibilities of synthetic life",
      image: "/images/careers/ai-overlord/ai-visionary.jpg"
    }
  ],

  // ── Quantum Engineer ──────────────────────────────────────────────────────
  "careers-quantum-engineer": [
    // {
    //   id: "careers-quantum-engineer-scientist",
    //   worldId: "careers",
    //   categoryId: "quantum-engineer",
    //   name: "Quantum Scientist",
    //   description: "Manipulating atoms to unlock impossible technologies",
    //   image: "/images/careers/quantum-engineer/quantum-scientist.jpg"
    // },
    // {
    //   id: "careers-quantum-engineer-architect",
    //   worldId: "careers",
    //   categoryId: "quantum-engineer",
    //   name: "Quantum Computer Architect",
    //   description: "Building processors that calculate in multiple realities",
    //   image: "/images/careers/quantum-engineer/quantum-computer-architect.jpg"
    // },
    // {
    //   id: "careers-quantum-engineer-physicist",
    //   worldId: "careers",
    //   categoryId: "quantum-engineer",
    //   name: "Future Physicist",
    //   description: "Solving the grand unified theory",
    //   image: "/images/careers/quantum-engineer/future-physicist.jpg"
    // },
    // {
    //   id: "careers-quantum-engineer-time",
    //   worldId: "careers",
    //   categoryId: "quantum-engineer",
    //   name: "Time Research Expert",
    //   description: "Bending the rules of chronology and causality",
    //   image: "/images/careers/quantum-engineer/time-research-expert.jpg"
    // },
    // {
    //   id: "careers-quantum-engineer-particle",
    //   worldId: "careers",
    //   categoryId: "quantum-engineer",
    //   name: "Particle Engineer",
    //   description: "Harnessing the power of subatomic manipulation",
    //   image: "/images/careers/quantum-engineer/particle-engineer.jpg"
    // },
    {
      id: "careers-quantum-engineer-director",
      worldId: "careers",
      categoryId: "quantum-engineer",
      name: "Quantum Lab Director",
      description: "Leading the brightest minds of the century",
      image: "/images/careers/quantum-engineer/quantum-lab-director.jpg"
    },
    {
      id: "careers-quantum-engineer-spacetime",
      worldId: "careers",
      categoryId: "quantum-engineer",
      name: "Space-Time Researcher",
      description: "Exploring wormholes and faster-than-light travel",
      image: "/images/careers/quantum-engineer/space-time-researcher.jpg"
    },
    {
      id: "careers-quantum-engineer-pioneer",
      worldId: "careers",
      categoryId: "quantum-engineer",
      name: "Advanced Technology Pioneer",
      description: "Inventing gadgets that seem like magic",
      image: "/images/careers/quantum-engineer/advanced-technology-pioneer.jpg"
    },
    {
      id: "careers-quantum-engineer-innovator",
      worldId: "careers",
      categoryId: "quantum-engineer",
      name: "Quantum Innovator",
      description: "Commercializing quantum mechanics for the masses",
      image: "/images/careers/quantum-engineer/quantum-innovator.jpg"
    },
    {
      id: "careers-quantum-engineer-nobel",
      worldId: "careers",
      categoryId: "quantum-engineer",
      name: "Future Nobel Winner",
      description: "Awarded for a breakthrough that changed humanity",
      image: "/images/careers/quantum-engineer/future-nobel-winner.jpg"
    }
  ],

  // ── Bio-Tech Pioneer ──────────────────────────────────────────────────────
  "careers-biotech-pioneer": [
    // {
    //   id: "careers-biotech-pioneer-genetic",
    //   worldId: "careers",
    //   categoryId: "biotech-pioneer",
    //   name: "Genetic Scientist",
    //   description: "Editing the genome to eliminate all diseases",
    //   image: "/images/careers/biotech-pioneer/genetic-scientist.jpg"
    // },
    // {
    //   id: "careers-biotech-pioneer-expert",
    //   worldId: "careers",
    //   categoryId: "biotech-pioneer",
    //   name: "Bio Engineering Expert",
    //   description: "Fusing organic tissue with cybernetic enhancements",
    //   image: "/images/careers/biotech-pioneer/bio-engineering-expert.jpg"
    // },
    // {
    //   id: "careers-biotech-pioneer-innovator",
    //   worldId: "careers",
    //   categoryId: "biotech-pioneer",
    //   name: "Medical Innovator",
    //   description: "Inventing the cures of tomorrow",
    //   image: "/images/careers/biotech-pioneer/medical-innovator.jpg"
    // },
    // {
    //   id: "careers-biotech-pioneer-doctor",
    //   worldId: "careers",
    //   categoryId: "biotech-pioneer",
    //   name: "Future Doctor",
    //   description: "Healing patients with advanced nanotechnology",
    //   image: "/images/careers/biotech-pioneer/future-doctor.jpg"
    // },
    // {
    //   id: "careers-biotech-pioneer-dna",
    //   worldId: "careers",
    //   categoryId: "biotech-pioneer",
    //   name: "DNA Researcher",
    //   description: "Unlocking the secrets hidden in our chromosomes",
    //   image: "/images/careers/biotech-pioneer/dna-researcher.jpg"
    // },
    {
      id: "careers-biotech-pioneer-science",
      worldId: "careers",
      categoryId: "biotech-pioneer",
      name: "Life Science Pioneer",
      description: "Extending human lifespan indefinitely",
      image: "/images/careers/biotech-pioneer/life-science-pioneer.jpg"
    },
    {
      id: "careers-biotech-pioneer-founder",
      worldId: "careers",
      categoryId: "biotech-pioneer",
      name: "HealthTech Founder",
      description: "Building a startup that revolutionizes medicine",
      image: "/images/careers/biotech-pioneer/healthtech-founder.jpg"
    },
    {
      id: "careers-biotech-pioneer-genius",
      worldId: "careers",
      categoryId: "biotech-pioneer",
      name: "Biomedical Genius",
      description: "Growing artificial organs and advancing prosthetics",
      image: "/images/careers/biotech-pioneer/biomedical-genius.jpg"
    },
    {
      id: "careers-biotech-pioneer-visionary",
      worldId: "careers",
      categoryId: "biotech-pioneer",
      name: "Lab Visionary",
      description: "Leading the most advanced bio-lab on Earth",
      image: "/images/careers/biotech-pioneer/lab-visionary.jpg"
    },
    {
      id: "careers-biotech-pioneer-leader",
      worldId: "careers",
      categoryId: "biotech-pioneer",
      name: "Future Healthcare Leader",
      description: "Making advanced biology accessible to everyone",
      image: "/images/careers/biotech-pioneer/future-healthcare-leader.jpg"
    }
  ],

  // ══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL CATEGORIES (Bollywood, Tollywood, KDrama, Anime)
  // ══════════════════════════════════════════════════════════════════════════

  // ── Bollywood Royalty ─────────────────────────────────────────────────────
  "bollywood-bollywood-royalty": [
    { id: "bollywood-bollywood-royalty-1", worldId: "bollywood", categoryId: "bollywood-royalty", name: "Grand Maharaja", description: "The ruler of the opulent palace", image: "/images/bollywood/bollywood-royalty/grand-maharaja.jpg" },
    { id: "bollywood-bollywood-royalty-2", worldId: "bollywood", categoryId: "bollywood-royalty", name: "Royal Queen", description: "Grace and power combined", image: "/images/bollywood/bollywood-royalty/royal-queen.jpg" },
    { id: "bollywood-bollywood-royalty-3", worldId: "bollywood", categoryId: "bollywood-royalty", name: "Prince of Heritage", description: "The heir to the legendary throne", image: "/images/bollywood/bollywood-royalty/prince-of-heritage.jpg" },
    { id: "bollywood-bollywood-royalty-4", worldId: "bollywood", categoryId: "bollywood-royalty", name: "Palace Guard", description: "Sworn protector of the royal family", image: "/images/bollywood/bollywood-royalty/palace-guard.jpg" },
    { id: "bollywood-bollywood-royalty-5", worldId: "bollywood", categoryId: "bollywood-royalty", name: "Majestic Ruler", description: "A king whose name echoes in eternity", image: "/images/bollywood/bollywood-royalty/majestic-ruler.jpg" },
    { id: "bollywood-bollywood-royalty-6", worldId: "bollywood", categoryId: "bollywood-royalty", name: "Warrior Princess", description: "Fierce in battle, elegant in court", image: "/images/bollywood/bollywood-royalty/warrior-princess.jpg" },
    { id: "bollywood-bollywood-royalty-7", worldId: "bollywood", categoryId: "bollywood-royalty", name: "Royal Courtier", description: "The mastermind behind the throne", image: "/images/bollywood/bollywood-royalty/royal-courtier.jpg" },
    { id: "bollywood-bollywood-royalty-8", worldId: "bollywood", categoryId: "bollywood-royalty", name: "Emperor of India", description: "The grandest of all monarchs", image: "/images/bollywood/bollywood-royalty/emperor-of-india.jpg" },
    { id: "bollywood-bollywood-royalty-9", worldId: "bollywood", categoryId: "bollywood-royalty", name: "Noble Duke", description: "Wealth, charm, and historic lineage", image: "/images/bollywood/bollywood-royalty/noble-duke.jpg" },
    { id: "bollywood-bollywood-royalty-10", worldId: "bollywood", categoryId: "bollywood-royalty", name: "Ancient Legend", description: "A mythic figure of royal descent", image: "/images/bollywood/bollywood-royalty/ancient-legend.jpg" }
  ],

  // ── Pan India Star ────────────────────────────────────────────────────────
  "tollywood-pan-india-star": [
    { id: "tollywood-pan-india-star-1", worldId: "tollywood", categoryId: "pan-india-star", name: "Global Icon", description: "Loved across all languages", image: "/images/tollywood/pan-india-star/global-icon.jpg" },
    { id: "tollywood-pan-india-star-2", worldId: "tollywood", categoryId: "pan-india-star", name: "Box Office King", description: "Shattering records worldwide", image: "/images/tollywood/pan-india-star/box-office-king.jpg" },
    { id: "tollywood-pan-india-star-3", worldId: "tollywood", categoryId: "pan-india-star", name: "Action Demigod", description: "The face of modern action cinema", image: "/images/tollywood/pan-india-star/action-demigod.jpg" },
    { id: "tollywood-pan-india-star-4", worldId: "tollywood", categoryId: "pan-india-star", name: "Nation's Pride", description: "Representing Indian cinema globally", image: "/images/tollywood/pan-india-star/nations-pride.jpg" },
    { id: "tollywood-pan-india-star-5", worldId: "tollywood", categoryId: "pan-india-star", name: "Mass Emperor", description: "Ruling the hearts of the masses", image: "/images/tollywood/pan-india-star/mass-emperor.jpg" },
    { id: "tollywood-pan-india-star-6", worldId: "tollywood", categoryId: "pan-india-star", name: "Cinematic Legend", description: "A career spanning decades of hits", image: "/images/tollywood/pan-india-star/cinematic-legend.jpg" },
    { id: "tollywood-pan-india-star-7", worldId: "tollywood", categoryId: "pan-india-star", name: "Trendsetter", description: "Defining style for a generation", image: "/images/tollywood/pan-india-star/trendsetter.jpg" },
    { id: "tollywood-pan-india-star-8", worldId: "tollywood", categoryId: "pan-india-star", name: "Megastar", description: "The ultimate superstar of the era", image: "/images/tollywood/pan-india-star/megastar.jpg" },
    { id: "tollywood-pan-india-star-9", worldId: "tollywood", categoryId: "pan-india-star", name: "Style Icon", description: "Imitated but never duplicated", image: "/images/tollywood/pan-india-star/style-icon.jpg" },
    { id: "tollywood-pan-india-star-10", worldId: "tollywood", categoryId: "pan-india-star", name: "Blockbuster Hero", description: "Delivering pure entertainment", image: "/images/tollywood/pan-india-star/blockbuster-hero.jpg" }
  ],

  // ── Thriller & Mystery ────────────────────────────────────────────────────
  "kdrama-thriller-mystery": [
    { id: "kdrama-thriller-mystery-1", worldId: "kdrama", categoryId: "thriller-mystery", name: "Genius Detective", description: "Solving the unsolvable crimes", image: "/images/kdrama/thriller-mystery/genius-detective.jpg" },
    { id: "kdrama-thriller-mystery-2", worldId: "kdrama", categoryId: "thriller-mystery", name: "Undercover Agent", description: "Living a double life in the shadows", image: "/images/kdrama/thriller-mystery/undercover-agent.jpg" },
    { id: "kdrama-thriller-mystery-3", worldId: "kdrama", categoryId: "thriller-mystery", name: "Profiler", description: "Reading the minds of criminals", image: "/images/kdrama/thriller-mystery/profiler.jpg" },
    { id: "kdrama-thriller-mystery-4", worldId: "kdrama", categoryId: "thriller-mystery", name: "Vigilante Justice", description: "Taking the law into his own hands", image: "/images/kdrama/thriller-mystery/vigilante-justice.jpg" },
    { id: "kdrama-thriller-mystery-5", worldId: "kdrama", categoryId: "thriller-mystery", name: "Cyber Hacker", description: "Exposing the truth through code", image: "/images/kdrama/thriller-mystery/cyber-hacker.jpg" },
    { id: "kdrama-thriller-mystery-6", worldId: "kdrama", categoryId: "thriller-mystery", name: "Cold Case Solver", description: "Bringing closure to forgotten victims", image: "/images/kdrama/thriller-mystery/cold-case-solver.jpg" },
    { id: "kdrama-thriller-mystery-7", worldId: "kdrama", categoryId: "thriller-mystery", name: "Mystery Writer", description: "Living out their own thriller novel", image: "/images/kdrama/thriller-mystery/mystery-writer.jpg" },
    { id: "kdrama-thriller-mystery-8", worldId: "kdrama", categoryId: "thriller-mystery", name: "Secret Informant", description: "The whisper in the dark alley", image: "/images/kdrama/thriller-mystery/secret-informant.jpg" },
    { id: "kdrama-thriller-mystery-9", worldId: "kdrama", categoryId: "thriller-mystery", name: "Rogue Cop", description: "Breaking the rules to find the truth", image: "/images/kdrama/thriller-mystery/rogue-cop.jpg" },
    { id: "kdrama-thriller-mystery-10", worldId: "kdrama", categoryId: "thriller-mystery", name: "Mastermind", description: "Always three steps ahead", image: "/images/kdrama/thriller-mystery/mastermind.jpg" }
  ],

  // ── Ninja & Samurai ───────────────────────────────────────────────────────
  "anime-ninja-samurai": [
    { id: "anime-ninja-samurai-1", worldId: "anime", categoryId: "ninja-samurai", name: "Shadow Shinobi", description: "Striking from the darkness", image: "/images/anime/ninja-samurai/shadow-shinobi.jpg" },
    { id: "anime-ninja-samurai-2", worldId: "anime", categoryId: "ninja-samurai", name: "Ronin Wanderer", description: "A masterless samurai seeking redemption", image: "/images/anime/ninja-samurai/ronin-wanderer.jpg" },
    { id: "anime-ninja-samurai-3", worldId: "anime", categoryId: "ninja-samurai", name: "Blade Master", description: "Unmatched skill with the katana", image: "/images/anime/ninja-samurai/blade-master.jpg" },
    { id: "anime-ninja-samurai-4", worldId: "anime", categoryId: "ninja-samurai", name: "Hidden Village Chief", description: "Leading the ultimate ninja clan", image: "/images/anime/ninja-samurai/hidden-village-chief.jpg" },
    { id: "anime-ninja-samurai-5", worldId: "anime", categoryId: "ninja-samurai", name: "Demon Slayer", description: "Hunting the supernatural threats", image: "/images/anime/ninja-samurai/demon-slayer.jpg" },
    { id: "anime-ninja-samurai-6", worldId: "anime", categoryId: "ninja-samurai", name: "Silent Assassin", description: "Moving without a sound", image: "/images/anime/ninja-samurai/silent-assassin.jpg" },
    { id: "anime-ninja-samurai-7", worldId: "anime", categoryId: "ninja-samurai", name: "Dual Sword Hero", description: "Wielding two blades in perfect harmony", image: "/images/anime/ninja-samurai/dual-sword-hero.jpg" },
    { id: "anime-ninja-samurai-8", worldId: "anime", categoryId: "ninja-samurai", name: "Honor Bound Warrior", description: "Living strictly by the Bushido code", image: "/images/anime/ninja-samurai/honor-bound-warrior.jpg" },
    { id: "anime-ninja-samurai-9", worldId: "anime", categoryId: "ninja-samurai", name: "Mystic Ninja", description: "Mastering elemental jutsu", image: "/images/anime/ninja-samurai/mystic-ninja.jpg" },
    { id: "anime-ninja-samurai-10", worldId: "anime", categoryId: "ninja-samurai", name: "Legendary Swordsman", description: "The greatest warrior of the era", image: "/images/anime/ninja-samurai/legendary-swordsman.jpg" }
  ]
};


// Combine all posters from all worlds and categories
export const posters = worlds.flatMap(w =>
  w.categories.flatMap(c => {
    const key = `${w.id}-${c.id}`;
    if (specificPosters[key]) {
      return specificPosters[key];
    }
    // Generate 5 dummy posters for each category so they appear populated
    return Array.from({ length: 5 }).map((_, i) => ({
      id: `${w.id}-${c.id}-poster-${i+1}`,
      worldId: w.id,
      categoryId: c.id,
      name: `${c.name} Style ${i+1}`,
      description: `${c.name} template`,
      image: c.image // reusing the category image as the poster template image
    }));
  })
);
