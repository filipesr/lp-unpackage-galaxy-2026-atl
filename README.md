# Galaxy Unpacked 2026 — AtlanticoShop

Página de transmissão ao vivo do Samsung Galaxy Unpacked 2026 para a AtlanticoShop: player incorporado e contagem regressiva para o evento, sem dependências além do Next.js.

**Demo:** https://lp-unpackage-galaxy-2026-atl.vercel.app

## O que é

Uma página de campanha, feita e publicada no mesmo dia do evento. A AtlanticoShop vende eletrônicos; o Unpacked é quando a Samsung anuncia a linha do ano. A página existe para transformar esse interesse em tráfego próprio: quem quer assistir assiste ali, na página da loja, em vez de no YouTube.

Escopo deliberadamente mínimo — título, player e contador. Três arquivos, nenhuma dependência além do React e do Next.

## Detalhe que não é óbvio

Contador em tempo real quebra hidratação: o servidor renderiza o HTML num instante e o navegador o recalcula em outro, e o React reclama da diferença. O componente resolve isso esperando a montagem antes de mostrar qualquer número:

```tsx
if (!mounted) {
  return <div className={styles.countdown} style={{ minHeight: "4rem" }} />;
}
```

O `minHeight` no lugar de um retorno vazio é o ponto: reserva o espaço que o contador vai ocupar, então o conteúdo abaixo não pula quando os números aparecem. Sem isso, o layout dá um solavanco no primeiro frame.

Passada a hora do evento, o contador troca sozinho para *"O evento começou!"* — a página não precisa de manutenção no dia.

## Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | Next.js (App Router) |
| Estilo | CSS Modules |
| Vídeo | YouTube incorporado |
| Deploy | Vercel |

Sem Tailwind, sem biblioteca de componentes, sem banco. Para uma página de uso único, cada dependência a mais seria custo sem retorno.

## Rodando localmente

```bash
pnpm install
pnpm dev
```

Não há variáveis de ambiente.

## Reaproveitando para outro evento

Três mudanças, todas em arquivo único:

| O quê | Onde |
| --- | --- |
| Data e hora do evento | `TARGET_DATE`, em `app/Countdown.tsx` (em UTC) |
| Vídeo da transmissão | `src` do `iframe`, em `app/page.tsx` |
| Título e descrição | `metadata`, em `app/layout.tsx` |
