import { WCAGCriterion } from './wcag-card';

export const wcagCriteria: WCAGCriterion[] = [
  {
    id: '1.1.1',
    title: '1.1.1 Non-text Content [A]',
    level: 'A',
    principle: 'Perceivable',
    category: 'Text Alternatives',
    description: 'Qualquer conteúdo não textual relevante para a compreensão deve possuir uma descrição alternativa (visível ou não) que identifique o conteúdo.',
    keywords: ['ccpa', 'ny shield', 'description', 'content', 'SEO'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html'
  },
  {
    id: '1.2.1',
    title: '1.2.1 Audio-only and Video-only (Prerecorded) [A]',
    level: 'A',
    principle: 'Perceivable',
    category: 'Time-based Media',
    description: 'Conteúdos apenas com áudio ou apenas com vídeo devem ter transcrição descritiva e/ou faixa de descrição de áudio.',
    keywords: ['transcription', 'audio', 'video', 'media'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html'
  },
  {
    id: '1.2.2',
    title: '1.2.2 Captions (Prerecorded) [A]',
    level: 'A',
    principle: 'Perceivable',
    category: 'Time-based Media',
    description: 'Legendas são fornecidas para todo o conteúdo de áudio pré-gravado em mídia sincronizada.',
    keywords: ['captions', 'subtitles', 'deaf', 'hearing impaired'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html'
  },
  {
    id: '1.3.1',
    title: '1.3.1 Info and Relationships [A]',
    level: 'A',
    principle: 'Perceivable',
    category: 'Adaptable',
    description: 'Informações, estrutura e relacionamentos transmitidos através da apresentação podem ser determinados programaticamente ou estão disponíveis no texto.',
    keywords: ['structure', 'headings', 'semantic', 'markup'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html'
  },
  {
    id: '1.3.2',
    title: '1.3.2 Meaningful Sequence [A]',
    level: 'A',
    principle: 'Perceivable',
    category: 'Adaptable',
    description: 'Quando a sequência em que o conteúdo é apresentado afeta seu significado, uma sequência de leitura correta pode ser determinada programaticamente.',
    keywords: ['reading order', 'sequence', 'layout'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html'
  },
  {
    id: '1.4.1',
    title: '1.4.1 Use of Color [A]',
    level: 'A',
    principle: 'Perceivable',
    category: 'Distinguishable',
    description: 'A cor não é usada como o único meio visual de transmitir informações, indicar uma ação, solicitar uma resposta ou distinguir um elemento visual.',
    keywords: ['color', 'contrast', 'blind', 'colorblind'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html'
  },
  {
    id: '1.4.3',
    title: '1.4.3 Contrast (Minimum) [AA]',
    level: 'AA',
    principle: 'Perceivable',
    category: 'Distinguishable',
    description: 'A apresentação visual de texto e imagens de texto tem uma relação de contraste de pelo menos 4.5:1.',
    keywords: ['contrast', 'ratio', 'visibility', 'legibility'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html'
  },
  {
    id: '2.1.1',
    title: '2.1.1 Keyboard [A]',
    level: 'A',
    principle: 'Operable',
    category: 'Keyboard Accessible',
    description: 'Toda a funcionalidade do conteúdo é operável através de uma interface de teclado sem exigir cronometragem específica para pressionamentos de teclas individuais.',
    keywords: ['keyboard', 'navigation', 'accessibility', 'motor disabilities'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html'
  },
  {
    id: '2.1.2',
    title: '2.1.2 No Keyboard Trap [A]',
    level: 'A',
    principle: 'Operable',
    category: 'Keyboard Accessible',
    description: 'Se o foco do teclado pode ser movido para um componente da página usando uma interface de teclado, então o foco pode ser movido para longe desse componente usando apenas uma interface de teclado.',
    keywords: ['keyboard trap', 'focus management', 'escape'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html'
  },
  {
    id: '2.2.1',
    title: '2.2.1 Timing Adjustable [A]',
    level: 'A',
    principle: 'Operable',
    category: 'Enough Time',
    description: 'Para cada limite de tempo definido pelo conteúdo, pelo menos uma das seguintes opções é verdadeira: desligar, ajustar ou estender.',
    keywords: ['timing', 'timeout', 'session', 'adjustable'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html'
  },
  {
    id: '2.3.1',
    title: '2.3.1 Three Flashes or Below Threshold [A]',
    level: 'A',
    principle: 'Operable',
    category: 'Seizures and Physical Reactions',
    description: 'As páginas da Web não contêm qualquer coisa que pisque mais de três vezes em qualquer período de um segundo.',
    keywords: ['seizures', 'epilepsy', 'flashing', 'photosensitive'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html'
  },
  {
    id: '2.4.1',
    title: '2.4.1 Bypass Blocks [A]',
    level: 'A',
    principle: 'Operable',
    category: 'Navigable',
    description: 'Um mecanismo está disponível para contornar blocos de conteúdo que são repetidos em várias páginas da Web.',
    keywords: ['skip links', 'navigation', 'bypass', 'repeated content'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html'
  },
  {
    id: '2.4.2',
    title: '2.4.2 Page Titled [A]',
    level: 'A',
    principle: 'Operable',
    category: 'Navigable',
    description: 'As páginas da Web têm títulos que descrevem o tópico ou propósito.',
    keywords: ['page title', 'document title', 'heading'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html'
  },
  {
    id: '2.4.3',
    title: '2.4.3 Focus Order [A]',
    level: 'A',
    principle: 'Operable',
    category: 'Navigable',
    description: 'Se uma página da Web pode ser navegada sequencialmente e as sequências de navegação afetam significado ou operação, os componentes focalizáveis recebem foco em uma ordem que preserva significado e operabilidade.',
    keywords: ['focus order', 'tab order', 'navigation sequence'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html'
  },
  {
    id: '2.4.4',
    title: '2.4.4 Link Purpose (In Context) [A]',
    level: 'A',
    principle: 'Operable',
    category: 'Navigable',
    description: 'O propósito de cada link pode ser determinado a partir do texto do link sozinho ou do texto do link junto com seu contexto de link determinado programaticamente.',
    keywords: ['link purpose', 'link text', 'context', 'descriptive'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html'
  },
  {
    id: '3.1.1',
    title: '3.1.1 Language of Page [A]',
    level: 'A',
    principle: 'Understandable',
    category: 'Readable',
    description: 'O idioma humano padrão de cada página da Web pode ser determinado programaticamente.',
    keywords: ['language', 'lang attribute', 'screen reader'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html'
  },
  {
    id: '3.2.1',
    title: '3.2.1 On Focus [A]',
    level: 'A',
    principle: 'Understandable',
    category: 'Predictable',
    description: 'Quando qualquer componente recebe foco, não inicia uma mudança de contexto.',
    keywords: ['focus', 'context change', 'predictable', 'unexpected'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html'
  },
  {
    id: '3.2.2',
    title: '3.2.2 On Input [A]',
    level: 'A',
    principle: 'Understandable',
    category: 'Predictable',
    description: 'Alterar a configuração de qualquer componente de interface do usuário não causa automaticamente uma mudança de contexto, a menos que o usuário tenha sido avisado do comportamento antes de usar o componente.',
    keywords: ['input', 'context change', 'form', 'automatic'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/on-input.html'
  },
  {
    id: '3.3.1',
    title: '3.3.1 Error Identification [A]',
    level: 'A',
    principle: 'Understandable',
    category: 'Input Assistance',
    description: 'Se um erro de entrada é automaticamente detectado, o item com erro é identificado e o erro é descrito ao usuário em texto.',
    keywords: ['error', 'validation', 'form', 'identification'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html'
  },
  {
    id: '3.3.2',
    title: '3.3.2 Labels or Instructions [A]',
    level: 'A',
    principle: 'Understandable',
    category: 'Input Assistance',
    description: 'Rótulos ou instruções são fornecidos quando o conteúdo requer entrada do usuário.',
    keywords: ['labels', 'instructions', 'form', 'input'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html'
  },
  {
    id: '4.1.1',
    title: '4.1.1 Parsing [A]',
    level: 'A',
    principle: 'Robust',
    category: 'Compatible',
    description: 'No conteúdo implementado usando linguagens de marcação, os elementos têm tags de início e fim completas, são aninhados de acordo com suas especificações.',
    keywords: ['parsing', 'markup', 'validation', 'html'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/parsing.html'
  },
  {
    id: '4.1.2',
    title: '4.1.2 Name, Role, Value [A]',
    level: 'A',
    principle: 'Robust',
    category: 'Compatible',
    description: 'Para todos os componentes de interface do usuário, o nome e a função podem ser determinados programaticamente.',
    keywords: ['name', 'role', 'value', 'aria', 'screen reader'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html'
  }
];