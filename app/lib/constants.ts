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

export const strainExample = {
  id: "cG9zdDo0NzgwMw==",
  title: "A-Dub",
  uri: "/cannabis-strains/a-dub/",
  date: "2022-11-10T17:09:51",
  modified: "2023-05-22T03:23:32",
  featuredImage: {
    node: {
      altText: "closeup of marijuana nug",
      title: "marijuana-bud-general",
      id: "cG9zdDo0Mzc4Ng==",
      sourceUrl:
        "https://admin.leafwell.com/app/uploads/2022/09/marijuana-bud-general.jpg",
      srcSet:
        "https://b2628119.smushcdn.com/2628119/app/uploads/2022/09/marijuana-bud-general-400x400.jpg?lossy=1&strip=1&webp=1 400w, https://b2628119.smushcdn.com/2628119/app/uploads/2022/09/marijuana-bud-general-700x700.jpg?lossy=1&strip=1&webp=1 700w, https://b2628119.smushcdn.com/2628119/app/uploads/2022/09/marijuana-bud-general-768x768.jpg?lossy=1&strip=1&webp=1 768w, https://b2628119.smushcdn.com/2628119/app/uploads/2022/09/marijuana-bud-general-1024x1024.jpg?lossy=1&strip=1&webp=1 1024w, https://b2628119.smushcdn.com/2628119/app/uploads/2022/09/marijuana-bud-general.jpg?lossy=1&strip=1&webp=1 1080w",
      mediaDetails: {
        width: 1080,
        height: 1080,
        __typename: "MediaDetails",
      },
      __typename: "MediaItem",
    },
    __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge",
  },
  strainTypes: {
    nodes: [
      {
        name: "Hybrid",
        slug: "hybrid",
        __typename: "StrainType",
      },
    ],
    __typename: "StrainToStrainTypeConnection",
  },
  details: {
    cannabinoids: [
      {
        abbreviation: "CBD",
        quantityStart: 1,
        quantityEnd: 1,
        __typename: "Strain_Straindetails_cannabinoids",
      },
      {
        abbreviation: "CBN",
        quantityStart: 0.1,
        quantityEnd: 0.1,
        __typename: "Strain_Straindetails_cannabinoids",
      },
    ],
    thc: {
      quantityStart: 27,
      quantityEnd: 32,
      __typename: "Strain_Straindetails_Thc",
    },
    __typename: "Strain_Straindetails",
  },
  __typename: "Strain",
};

export const SingleStrain = gql`
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

export const SearchStrainByString = gql`
  fragment StrainExcerpt on Strain {
    id
    title
    uri
    date
    modified
    strainTypes {
      nodes {
        name
        slug
      }
    }
    details: strainDetails {
      cannabinoids {
        abbreviation
        quantityStart
        quantityEnd
      }
      thc {
        quantityStart
        quantityEnd
      }
    }
  }

  query SearchStrainByString(
    $languageCode: LanguageCodeFilterEnum = DEFAULT
    $search: String = ""
    $after: String = null
    $limit: Int = 12
  ) {
    contentNodes(
      where: {
        language: $languageCode
        search: $search
        contentTypes: [STRAIN]
      }
      after: $after
      first: $limit
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        contentType {
          node {
            name
          }
        }
        ...StrainExcerpt
      }
    }
  }
`;
