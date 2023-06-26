import { gql } from "@apollo/client";

export const buttons: string[] = ["All", "Indica", "Sativa", "Hybrid"];

export enum Alphabet {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G",
  H = "H",
  I = "I",
  J = "J",
  K = "K",
  L = "L",
  M = "M",
  N = "N",
  O = "O",
  P = "P",
  Q = "Q",
  R = "R",
  S = "S",
  T = "T",
  U = "U",
  V = "V",
  W = "W",
  X = "X",
  Y = "Y",
  Z = "Z",
}

export const StrainQuery = gql`
  fragment Media on MediaItem {
    altText
    title
    id
    sourceUrl
    srcSet(size: $imageSize)
    mediaDetails {
      width
      height
    }
  }
  fragment ConditionLinkWithTypes on Condition {
    id
    title
    uri
    conditionTypes {
      nodes {
        name
      }
    }
  }

  query SingleStrain(
    $slug: ID! = ""
    $imageSize: MediaItemSizeEnum = _2048X2048
  ) {
    strain(id: $slug, idType: SLUG) {
      id: databaseId
      content
      title
      uri
      featuredImage {
        node {
          ...Media
        }
      }
      aromas {
        nodes {
          name
        }
      }
      flavors {
        nodes {
          name
        }
      }
      negativeEffects {
        nodes {
          name
        }
      }
      positiveEffects {
        nodes {
          name
        }
      }
      strainTypes {
        nodes {
          name
          slug
        }
      }
      terpenes {
        nodes {
          name
          details: terpeneDetails {
            color
          }
        }
      }
      details: strainDetails {
        cannabinoids {
          abbreviation
          name
          quantityStart
          quantityEnd
          extraInfo
        }
        composition {
          quantity
          type
        }
        conditionsDescription
        conditions {
          condition {
            ...ConditionLinkWithTypes
          }
          description
        }
        dosing
        effectsExtraInfo
        faqs {
          title
          content
        }
        flavonoids
        growing
        growingImage {
          ...Media
        }
        growingHumidity
        growingHeight
        growingFlowering
        terpenesDescription
        thc {
          quantityStart
          quantityEnd
          extraInfo
        }
      }
    }
  }
`;
