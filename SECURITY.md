# Security Policy

## Credential handling

This repository intentionally contains no credentials or personal contact information.

- Never commit `.env` files, access tokens, API keys, cookies, private keys, browser profiles, or exported credential stores.
- Inject optional service credentials through the process environment at runtime.
- Keep browser-delivered JavaScript free of secrets; frontend code is visible to every visitor.
- If a credential is ever committed, revoke or rotate it immediately, then remove it from the complete Git history.

## Local information

Do not commit machine-specific absolute paths, operating-system user names, temporary folders, local browser profiles, or diagnostic logs containing this information. Use project-relative paths and generated artifacts outside the repository.

## Reporting

Use GitHub's private vulnerability reporting channel when available. Do not include a live secret in an issue, discussion, pull request, screenshot, or log excerpt.

