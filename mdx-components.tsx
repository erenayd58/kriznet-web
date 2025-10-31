import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 text-2xl font-semibold text-gray-900">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mt-4 text-lg leading-8 text-gray-600">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-gray-600">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="pl-2">{children}</li>,
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    ...components,
  };
}

