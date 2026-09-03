# feature-flags

Greenfield flag-evaluation service built in 2025. **Intentionally clean** — this is the
contrast case so CM's "nothing to modernize here" verdict is demoable.

## Stack
- **Node 20** (current LTS)
- **TypeScript 5.x**, ESM
- Current, non-vulnerable dependencies
- Typed, tested

## Modernization signals for CM
- None expected. CM should scan this and report no actionable modernization work,
  demonstrating it doesn't churn healthy code.

## Run
```bash
npm install
npm run build && npm start
```
