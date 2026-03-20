---
inclusion: auto
---

# Padrões de Segurança — UDS

## Autenticação

- JWT com refresh token rotation
- Access token: 15min TTL, refresh token: 7 dias
- Tokens em httpOnly secure cookies (web) ou secure storage (mobile)
- NUNCA armazenar tokens em localStorage
- MFA obrigatório para operações sensíveis
- Rate limiting em endpoints de login: 5 tentativas / 15 min
- Lockout após 10 tentativas falhas consecutivas

## Validação de Input

- Validação no frontend (UX) E no backend (segurança)
- Usar Zod/Joi/class-validator para schemas de validação
- Sanitizar HTML input contra XSS (DOMPurify ou equivalente)
- Parametrizar queries SQL (nunca concatenar strings)
- Limitar tamanho de uploads (10MB padrão, configurável)
- Validar Content-Type de uploads (whitelist de MIME types)
- Escapar output em templates (auto-escape habilitado)

## Security Headers Obrigatórios

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Content-Security-Policy: default-src 'self'
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## Secrets

- NUNCA commitar secrets no repositório
- Usar AWS Secrets Manager ou SSM Parameter Store
- Rotação automática de secrets a cada 90 dias
- .env apenas para desenvolvimento local (no .gitignore)
- Audit log para acesso a secrets sensíveis
