import { gql } from 'apollo-boost';

export const USER_FRAGMENT = gql`
  fragment userFragment on User {
    id
    email
    name
  }
`;

export const PROJECT_FRAGMENT = gql`
  fragment projectFragment on Project {
    id
    name
  }
`;

export const LANGUAGE_FRAGMENT = gql`
  fragment languageFragment on Language {
    id
    name
  }
`;

export const NAMESPACE_FRAGMENT = gql`
  fragment namespaceFragment on Namespace {
    id
    name
  }
`;

export const TRANSLATION_FRAGMENT = gql`
  fragment translationFragment on Translation {
    id
    key
    value
    status
  }
`;
