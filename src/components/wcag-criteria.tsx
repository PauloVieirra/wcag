import { WCAGCriterion } from './wcag-card';

export const wcagCriteria: WCAGCriterion[] = [
  // Princípio 1: Perceptível
  {
    id: '1.1.1',
    title: '1.1.1 Conteúdo não textual [A]',
    level: 'A',
    principle: 'Perceptível',
    category: 'Alternativas em Texto',
    description: 'Qualquer conteúdo "não textual" e relevante para a compreensão deve possuir uma descrição alternativa (visível ou não) que identifique o conteúdo (incluindo captcha).',
    keywords: ['descrição', 'conteúdo', 'SEO', 'imagens', 'alternativo'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html'
  },
  {
    id: '1.2.1',
    title: '1.2.1 Apenas áudio e apenas vídeo (pré-gravado) [A]',
    level: 'A',
    principle: 'Perceptível',
    category: 'Mídia Baseada em Tempo',
    description: 'Uma das seguintes alternativas deve ser fornecida: Apenas áudio: transcrição descritiva em texto. Apenas vídeo: transcrição descritiva em texto e/ou faixa de audiodescrição.',
    keywords: ['transcrição', 'áudio', 'vídeo', 'mídia'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html'
  },
  {
    id: '1.2.2',
    title: '1.2.2 Legendas (pré-gravado) [A]',
    level: 'A',
    principle: 'Perceptível',
    category: 'Mídia Baseada em Tempo',
    description: 'Qualquer conteúdo pré-gravado que contenha uma faixa de áudio deve ter legendas.',
    keywords: ['legendas', 'surdos', 'deficiência auditiva'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html'
  },
  {
    id: '1.2.3',
    title: '1.2.3 Audiodescrição ou alternativa de mídia (pré-gravado) [A]',
    level: 'A',
    principle: 'Perceptível',
    category: 'Mídia Baseada em Tempo',
    description: 'Uma audiodescrição ou transcrição descritiva em texto deve ser fornecida para todo conteúdo de vídeo pré-gravado.',
    keywords: ['audiodescrição', 'transcrição', 'vídeo'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded.html'
  },
  {
    id: '1.2.4',
    title: '1.2.4 Legendas (ao vivo) [AA]',
    level: 'AA',
    principle: 'Perceptível',
    category: 'Mídia Baseada em Tempo',
    description: 'Qualquer conteúdo ao vivo que contenha uma faixa de áudio deve ter legendas.',
    keywords: ['legendas', 'ao vivo', 'tempo real'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-live.html'
  },
  {
    id: '1.2.5',
    title: '1.2.5 Audiodescrição (pré-gravado) [AA]',
    level: 'AA',
    principle: 'Perceptível',
    category: 'Mídia Baseada em Tempo',
    description: 'Uma audiodescrição deve ser fornecida para todo conteúdo de vídeo pré-gravado.',
    keywords: ['audiodescrição', 'vídeo', 'deficiência visual'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded.html'
  },
  {
    id: '1.2.6',
    title: '1.2.6 Língua de sinais (pré-gravado) [AAA]',
    level: 'AAA',
    principle: 'Perceptível',
    category: 'Mídia Baseada em Tempo',
    description: 'Qualquer conteúdo pré-gravado que contenha áudio deve ser traduzido para língua de sinais.',
    keywords: ['libras', 'língua de sinais', 'surdos'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/sign-language-prerecorded.html'
  },
  {
    id: '1.2.7',
    title: '1.2.7 Audiodescrição estendida (pré-gravado) [AAA]',
    level: 'AAA',
    principle: 'Perceptível',
    category: 'Mídia Baseada em Tempo',
    description: 'Se não for possível manter audiodescrição junto com áudio original, deve haver alternativa que permita pausar o vídeo, reproduzir audiodescrição e retomar.',
    keywords: ['audiodescrição', 'pausar', 'estendida'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/extended-audio-description-prerecorded.html'
  },
  {
    id: '1.2.8',
    title: '1.2.8 Alternativa de mídia (pré-gravado) [AAA]',
    level: 'AAA',
    principle: 'Perceptível',
    category: 'Mídia Baseada em Tempo',
    description: 'Uma transcrição descritiva em texto deve ser fornecida para todo conteúdo de vídeo pré-gravado.',
    keywords: ['transcrição', 'texto', 'alternativa'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/media-alternative-prerecorded.html'
  },
  {
    id: '1.2.9',
    title: '1.2.9 Apenas áudio (ao vivo) [AAA]',
    level: 'AAA',
    principle: 'Perceptível',
    category: 'Mídia Baseada em Tempo',
    description: 'Qualquer conteúdo de áudio transmitido ao vivo deve ter transcrição descritiva em texto.',
    keywords: ['áudio', 'ao vivo', 'transcrição'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-only-live.html'
  },
  {
    id: '1.3.1',
    title: '1.3.1 Informações e relacionamentos [A]',
    level: 'A',
    principle: 'Perceptível',
    category: 'Adaptável',
    description: 'A organização estrutural de uma tela deve ser construída de forma que sua arquitetura da informação faça sentido tanto para quem vê quanto para quem ouve o conteúdo.',
    keywords: ['estrutura', 'semântica', 'conteúdo', 'SEO'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html'
  },
  {
    id: '1.3.2',
    title: '1.3.2 Sequência significativa [A]',
    level: 'A',
    principle: 'Perceptível',
    category: 'Adaptável',
    description: 'Qualquer que seja o método de interação, a apresentação das informações na tela deve sempre ter uma sequência lógica.',
    keywords: ['responsivo', 'sequência', 'ordem'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html'
  },
  {
    id: '1.3.3',
    title: '1.3.3 Características sensoriais [A]',
    level: 'A',
    principle: 'Perceptível',
    category: 'Adaptável',
    description: 'Qualquer tipo de instrução ou direcionamento não deve depender de formato específico, localização espacial, som ou qualquer outra característica sensorial.',
    keywords: ['som', 'cor', 'forma', 'função', 'posição'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics.html'
  },
  {
    id: '1.3.4',
    title: '1.3.4 Orientação [AA]',
    level: 'AA',
    principle: 'Perceptível',
    category: 'Adaptável',
    description: 'Nenhuma funcionalidade deve depender de orientação específica da tela, a menos que seja essencial para a função.',
    keywords: ['orientação', 'responsivo', 'rotação'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/orientation.html'
  },
  {
    id: '1.3.5',
    title: '1.3.5 Identificar propósito de entrada [AA]',
    level: 'AA',
    principle: 'Perceptível',
    category: 'Adaptável',
    description: 'Pessoas devem ter clareza sobre o que preencher nos campos de formulário.',
    keywords: ['clareza', 'transparência', 'formulário'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html'
  },
  {
    id: '1.3.6',
    title: '1.3.6 Identificar propósito [AAA]',
    level: 'AAA',
    principle: 'Perceptível',
    category: 'Adaptável',
    description: 'Usar símbolos e elementos facilmente identificáveis e permitir customizações aumenta a capacidade cognitiva para algumas pessoas.',
    keywords: ['affordance', 'customização', 'símbolos'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html'
  },
  {
    id: '1.4.1',
    title: '1.4.1 Uso de cor [A]',
    level: 'A',
    principle: 'Perceptível',
    category: 'Distinguível',
    description: 'Cores não devem ser usadas como único meio de transmitir conteúdo ou distinguir elementos visuais.',
    keywords: ['cor', 'clareza', 'contraste'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html'
  },
  {
    id: '1.4.2',
    title: '1.4.2 Controle de áudio [A]',
    level: 'A',
    principle: 'Perceptível',
    category: 'Distinguível',
    description: 'Deve ser fornecida forma simples de pausar, silenciar ou ajustar volume para qualquer áudio que toque automaticamente por mais de 3 segundos.',
    keywords: ['tempo', 'controle', 'áudio'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html'
  },
  {
    id: '1.4.3',
    title: '1.4.3 Contraste (mínimo) [AA]',
    level: 'AA',
    principle: 'Perceptível',
    category: 'Distinguível',
    description: 'Textos devem ter relação de contraste entre primeiro plano e fundo de pelo menos 4.5:1.',
    keywords: ['contraste', 'cor', 'legibilidade'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html'
  },
  {
    id: '1.4.4',
    title: '1.4.4 Redimensionar texto [AA]',
    level: 'AA',
    principle: 'Perceptível',
    category: 'Distinguível',
    description: 'Ao ampliar até 200% na tela, a responsividade dos textos deve ocorrer mantendo leitura e legibilidade adequadas.',
    keywords: ['responsivo', 'zoom', 'redimensionar'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html'
  },
  {
    id: '1.4.5',
    title: '1.4.5 Imagens de texto [AA]',
    level: 'AA',
    principle: 'Perceptível',
    category: 'Distinguível',
    description: 'Qualquer trecho que pode ser exibido em formato de texto estilizado não deve ser apresentado como imagem, a menos que possa ser customizado.',
    keywords: ['customização', 'semântica', 'texto'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html'
  },
  {
    id: '1.4.6',
    title: '1.4.6 Contraste (aprimorado) [AAA]',
    level: 'AAA',
    principle: 'Perceptível',
    category: 'Distinguível',
    description: 'Textos devem ter relação de contraste entre primeiro plano e fundo de pelo menos 7:1.',
    keywords: ['contraste', 'cor', 'aprimorado'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html'
  },
  {
    id: '1.4.7',
    title: '1.4.7 Áudio de fundo baixo ou ausente [AAA]',
    level: 'AAA',
    principle: 'Perceptível',
    category: 'Distinguível',
    description: 'Qualquer som que não seja a voz principal deve ser baixo, inexistente ou ter controle simples para ser desligado.',
    keywords: ['som', 'controle', 'fundo'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/low-or-no-background-audio.html'
  },
  {
    id: '1.4.8',
    title: '1.4.8 Apresentação visual [AAA]',
    level: 'AAA',
    principle: 'Perceptível',
    category: 'Distinguível',
    description: 'Fornecer controles específicos para permitir controle da apresentação de informações na tela sem comprometer legibilidade.',
    keywords: ['customização', 'responsivo', 'texto'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation.html'
  },
  {
    id: '1.4.9',
    title: '1.4.9 Imagens de texto (sem exceção) [AAA]',
    level: 'AAA',
    principle: 'Perceptível',
    category: 'Distinguível',
    description: 'Imagens de texto são permitidas apenas quando decorativas e não essenciais para compreensão do conteúdo.',
    keywords: ['customização', 'semântica', 'texto'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/images-of-text-no-exception.html'
  },
  {
    id: '1.4.10',
    title: '1.4.10 Refluxo [AA]',
    level: 'AA',
    principle: 'Perceptível',
    category: 'Distinguível',
    description: 'Ao ampliar até 400% na tela, as informações devem ser responsivas evitando rolagem horizontal.',
    keywords: ['responsivo', 'refluxo', 'zoom'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/reflow.html'
  },
  {
    id: '1.4.11',
    title: '1.4.11 Contraste não textual [AA]',
    level: 'AA',
    principle: 'Perceptível',
    category: 'Distinguível',
    description: 'Componentes de interface e imagens essenciais devem ter relação de contraste de pelo menos 3:1.',
    keywords: ['contraste', 'cor', 'imagens', 'gráficos'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html'
  },
  {
    id: '1.4.12',
    title: '1.4.12 Espaçamento de texto [AA]',
    level: 'AA',
    principle: 'Perceptível',
    category: 'Distinguível',
    description: 'Quando pessoas fazem ajustes e redimensionam textos para valores específicos, não deve haver perda de legibilidade.',
    keywords: ['customização', 'responsivo', 'texto'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html'
  },
  {
    id: '1.4.13',
    title: '1.4.13 Conteúdo em hover ou foco [AA]',
    level: 'AA',
    principle: 'Perceptível',
    category: 'Distinguível',
    description: 'Conteúdo adicional não deve ser acionado apenas com foco por mouse ou teclado. Se ocorrer, certas condições devem ser atendidas.',
    keywords: ['mouse', 'teclado', 'interação'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html'
  },

  // Princípio 2: Operável
  {
    id: '2.1.1',
    title: '2.1.1 Teclado [A]',
    level: 'A',
    principle: 'Operável',
    category: 'Acessível por Teclado',
    description: 'Toda funcionalidade deve ser ativada via teclado, a menos que a funcionalidade não permita controle apenas por teclado.',
    keywords: ['teclado', 'interação', 'navegação'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html'
  },
  {
    id: '2.1.2',
    title: '2.1.2 Sem cilada de teclado [A]',
    level: 'A',
    principle: 'Operável',
    category: 'Acessível por Teclado',
    description: 'Ao interagir via teclado, navegação por todos elementos "clicáveis" deve ocorrer sem bloqueio ou interrupção.',
    keywords: ['teclado', 'interação', 'armadilha'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html'
  },
  {
    id: '2.1.3',
    title: '2.1.3 Teclado (sem exceção) [AAA]',
    level: 'AAA',
    principle: 'Operável',
    category: 'Acessível por Teclado',
    description: 'Toda funcionalidade deve ser ativada via teclado, sem exceção.',
    keywords: ['teclado', 'interação', 'completo'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception.html'
  },
  {
    id: '2.1.4',
    title: '2.1.4 Atalhos de tecla de caractere [A]',
    level: 'A',
    principle: 'Operável',
    category: 'Acessível por Teclado',
    description: 'Criação de atalhos de teclado deve evitar usar apenas caracteres simples que podem conflitar com atalhos existentes.',
    keywords: ['teclado', 'interação', 'atalhos'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html'
  },
  {
    id: '2.2.1',
    title: '2.2.1 Tempo ajustável [A]',
    level: 'A',
    principle: 'Operável',
    category: 'Tempo Suficiente',
    description: 'Se um recurso é definido com tempo para execução e não é essencial, deve incluir opção para desligar ou expandir.',
    keywords: ['tempo', 'controle', 'timeout'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html'
  },
  {
    id: '2.2.2',
    title: '2.2.2 Pausar, parar, ocultar [A]',
    level: 'A',
    principle: 'Operável',
    category: 'Tempo Suficiente',
    description: 'Qualquer elemento na tela com movimento automático ou piscante que dure mais de 5 segundos deve ter controle para pausar, parar ou ocultar.',
    keywords: ['movimento', 'controle', 'pausar'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html'
  },
  {
    id: '2.2.3',
    title: '2.2.3 Sem tempo [AAA]',
    level: 'AAA',
    principle: 'Operável',
    category: 'Tempo Suficiente',
    description: 'Nenhuma funcionalidade na tela deve ter qualquer tipo de execução por cumprimento em determinado tempo.',
    keywords: ['tempo', 'controle', 'sem limite'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/no-timing.html'
  },
  {
    id: '2.2.4',
    title: '2.2.4 Interrupções [AAA]',
    level: 'AAA',
    principle: 'Operável',
    category: 'Tempo Suficiente',
    description: 'Qualquer tipo de interrupção que pode confundir alguém deve ter opção de desconexão ou adiamento, exceto emergências.',
    keywords: ['interrupção', 'controle', 'notificação'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/interruptions.html'
  },
  {
    id: '2.2.5',
    title: '2.2.5 Reautenticação [AAA]',
    level: 'AAA',
    principle: 'Operável',
    category: 'Tempo Suficiente',
    description: 'Quando sessão autenticada expira, pessoa logada deve poder continuar atividade sem perda de dados ao realizar nova autenticação.',
    keywords: ['autenticação', 'armazenamento', 'sessão'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/re-authenticating.html'
  },
  {
    id: '2.2.6',
    title: '2.2.6 Timeouts [AAA]',
    level: 'AAA',
    principle: 'Operável',
    category: 'Tempo Suficiente',
    description: 'Se há inatividade e isso resulta em perda de dados preenchidos, mensagem deve avisar que dados serão perdidos.',
    keywords: ['autenticação', 'tempo', 'armazenamento'],
    url: 'https://www.w3.org/WAI/WCAG22/Understanding/timeouts.html'
  },
  {
    id: '2.3.1',
    title: '2.3.1 Três piscadas ou abaixo do limite [A]',
    level: 'A',
    principle: 'Operável',
    category: 'Convulsões e Reações Físicas',
    description: 'Nenhum conteúdo da página deve piscar mais de 3 vezes por segundo, a menos que as piscadas sejam de baixo contraste.',
    keywords: ['contraste', 'animação', 'movimento'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html'
  },
  {
    id: '2.3.2',
    title: '2.3.2 Três piscadas [AAA]',
    level: 'AAA',
    principle: 'Operável',
    category: 'Convulsões e Reações Físicas',
    description: 'Nenhum conteúdo da página deve piscar mais de 3 vezes por segundo, sem exceção.',
    keywords: ['animação', 'movimento', 'epilepsia'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/three-flashes.html'
  },
  {
    id: '2.3.3',
    title: '2.3.3 Animação de interações [AAA]',
    level: 'AAA',
    principle: 'Operável',
    category: 'Convulsões e Reações Físicas',
    description: 'Qualquer tipo de animação interativa (não essencial) acionada pela pessoa deve ter forma simples de ser desativada.',
    keywords: ['movimento', 'controle', 'interação'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html'
  },
  {
    id: '2.4.1',
    title: '2.4.1 Pular blocos [A]',
    level: 'A',
    principle: 'Operável',
    category: 'Navegável',
    description: 'Deve ser fornecido tipo de controle para que pessoas possam ignorar determinados conteúdos repetitivos.',
    keywords: ['teclado', 'semântica', 'interação'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html'
  },
  {
    id: '2.4.2',
    title: '2.4.2 Página intitulada [A]',
    level: 'A',
    principle: 'Operável',
    category: 'Navegável',
    description: 'Todas as telas devem ter título principal e descrever claramente seu propósito.',
    keywords: ['conteúdo', 'SEO', 'clareza'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html'
  },
  {
    id: '2.4.3',
    title: '2.4.3 Ordem do foco [A]',
    level: 'A',
    principle: 'Operável',
    category: 'Navegável',
    description: 'A interação por elementos focalizáveis na tela deve sempre ser sequencial e lógica conforme conteúdo apresentado.',
    keywords: ['teclado', 'interação', 'ordem'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html'
  },
  {
    id: '2.4.4',
    title: '2.4.4 Propósito do link (em contexto) [A]',
    level: 'A',
    principle: 'Operável',
    category: 'Navegável',
    description: 'O propósito de um link deve ser determinado a partir do texto do link ou do contexto que envolve este link.',
    keywords: ['link', 'conteúdo', 'SEO'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html'
  },
  {
    id: '2.4.5',
    title: '2.4.5 Múltiplas formas [AA]',
    level: 'AA',
    principle: 'Operável',
    category: 'Navegável',
    description: 'Pessoas devem sempre ter mais de uma opção para encontrar determinado conteúdo.',
    keywords: ['conteúdo', 'SEO', 'interação'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html'
  },
  {
    id: '2.4.6',
    title: '2.4.6 Cabeçalhos e rótulos [AA]',
    level: 'AA',
    principle: 'Operável',
    category: 'Navegável',
    description: 'Todos os títulos e rótulos devem descrever claramente o propósito dos conteúdos ou agrupamentos sem ambiguidade.',
    keywords: ['conteúdo', 'SEO', 'clareza'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html'
  },
  {
    id: '2.4.7',
    title: '2.4.7 Foco visível [AA]',
    level: 'AA',
    principle: 'Operável',
    category: 'Navegável',
    description: 'Ao interagir por teclado, qualquer pessoa deve conseguir identificar sua localização espacial na tela através de foco visível.',
    keywords: ['teclado', 'interação', 'visual'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html'
  },
  {
    id: '2.4.8',
    title: '2.4.8 Localização [AAA]',
    level: 'AAA',
    principle: 'Operável',
    category: 'Navegável',
    description: 'Qualquer pessoa deve conseguir se localizar ou orientar facilmente em qualquer parte da tela ou conjunto de telas.',
    keywords: ['conteúdo', 'clareza', 'localização'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/location.html'
  },
  {
    id: '2.4.9',
    title: '2.4.9 Propósito do link (apenas link) [AAA]',
    level: 'AAA',
    principle: 'Operável',
    category: 'Navegável',
    description: 'O propósito de um link deve ser determinado apenas a partir do texto do link.',
    keywords: ['link', 'conteúdo', 'SEO'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html'
  },
  {
    id: '2.4.10',
    title: '2.4.10 Cabeçalhos de seção [AAA]',
    level: 'AAA',
    principle: 'Operável',
    category: 'Navegável',
    description: 'Sempre que conteúdo da tela for dividido em sessões, todas devem ter títulos claros com níveis hierárquicos bem definidos.',
    keywords: ['conteúdo', 'SEO', 'clareza'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/section-headings.html'
  },
  {
    id: '2.4.11',
    title: '2.4.11 Foco não obscurecido (mínimo) [AA]',
    level: 'AA',
    principle: 'Operável',
    category: 'Navegável',
    description: 'Quando foco visível é exibido em algum elemento, não pode estar completamente oculto devido a outros componentes.',
    keywords: ['teclado', 'interação', 'visual'],
    url: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html'
  },
  {
    id: '2.4.12',
    title: '2.4.12 Foco não obscurecido (aprimorado) [AAA]',
    level: 'AAA',
    principle: 'Operável',
    category: 'Navegável',
    description: 'Quando foco visível é exibido em algum elemento, não pode estar oculto devido a outros componentes da interface.',
    keywords: ['teclado', 'interação', 'visual'],
    url: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html'
  },
  {
    id: '2.4.13',
    title: '2.4.13 Aparência do foco [AAA]',
    level: 'AAA',
    principle: 'Operável',
    category: 'Navegável',
    description: 'Quando foco visível é exibido, deve ter 2 pixels de largura, espaçamento mínimo e contraste suficiente com áreas adjacentes.',
    keywords: ['teclado', 'interação', 'visual'],
    url: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html'
  },
  {
    id: '2.5.1',
    title: '2.5.1 Gestos de ponteiro [A]',
    level: 'A',
    principle: 'Operável',
    category: 'Modalidades de Entrada',
    description: 'Qualquer funcionalidade que requer caminho tátil para ser acionada também precisa de método alternativo para quem não consegue fazer o gesto.',
    keywords: ['toque', 'interação', 'alternativo'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html'
  },
  {
    id: '2.5.2',
    title: '2.5.2 Cancelamento de ponteiro [A]',
    level: 'A',
    principle: 'Operável',
    category: 'Modalidades de Entrada',
    description: 'É possível que haja clique ou toque acidental e se a pessoa perceber antes de soltar, deve ter forma de cancelar ativação acidental.',
    keywords: ['toque', 'interação', 'cancelamento'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html'
  },
  {
    id: '2.5.3',
    title: '2.5.3 Rótulo no nome [A]',
    level: 'A',
    principle: 'Operável',
    category: 'Modalidades de Entrada',
    description: 'Rótulos em botões, ícones acionáveis ou qualquer controle interativo devem ter descrição significativa para quem vê e quem apenas ouve.',
    keywords: ['conteúdo', 'clareza', 'rótulo'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html'
  },
  {
    id: '2.5.4',
    title: '2.5.4 Atuação por movimento [A]',
    level: 'A',
    principle: 'Operável',
    category: 'Modalidades de Entrada',
    description: 'Se há recurso que requer movimento do dispositivo, deve oferecer forma de desligar para evitar ativação acidental e alternativa de ativação.',
    keywords: ['interação', 'alternativo', 'movimento'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html'
  },
  {
    id: '2.5.5',
    title: '2.5.5 Tamanho do alvo (aprimorado) [AAA]',
    level: 'AAA',
    principle: 'Operável',
    category: 'Modalidades de Entrada',
    description: 'O tamanho das áreas que podem ser clicadas ou tocadas deve ser de pelo menos 44x44 pixels.',
    keywords: ['visual', 'interação', 'espaçamento'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/target-size-enhanced.html'
  },
  {
    id: '2.5.6',
    title: '2.5.6 Mecanismos de entrada simultâneos [AAA]',
    level: 'AAA',
    principle: 'Operável',
    category: 'Modalidades de Entrada',
    description: 'Funcionalidade nativa em dispositivo móvel não deve ser comprometida quando pessoa conecta periférico não nativo.',
    keywords: ['interação', 'alternativo', 'dispositivo'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html'
  },
  {
    id: '2.5.7',
    title: '2.5.7 Movimentos de arrastar [AA]',
    level: 'AA',
    principle: 'Operável',
    category: 'Modalidades de Entrada',
    description: 'Qualquer funcionalidade que depende de movimento de arrastar e soltar deve receber método alternativo por clique ou toque.',
    keywords: ['interação', 'alternativo', 'controle'],
    url: 'https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html'
  },
  {
    id: '2.5.8',
    title: '2.5.8 Tamanho do alvo (mínimo) [AA]',
    level: 'AA',
    principle: 'Operável',
    category: 'Modalidades de Entrada',
    description: 'O tamanho das áreas que podem ser clicadas ou tocadas deve ser de pelo menos 24x24 pixels.',
    keywords: ['visual', 'interação', 'espaçamento'],
    url: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html'
  },

  // Princípio 3: Compreensível
  {
    id: '3.1.1',
    title: '3.1.1 Idioma da página [A]',
    level: 'A',
    principle: 'Compreensível',
    category: 'Legível',
    description: 'Declarar adequadamente o idioma da tela faz leitores de tela usarem entonação correta para citar conteúdo.',
    keywords: ['conteúdo', 'internacionalização', 'idioma'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html'
  },
  {
    id: '3.1.2',
    title: '3.1.2 Idioma de partes [AA]',
    level: 'AA',
    principle: 'Compreensível',
    category: 'Legível',
    description: 'O idioma de palavra ou frase específica contendo idioma diferente do original deve ser definido corretamente.',
    keywords: ['conteúdo', 'internacionalização', 'idioma'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html'
  },
  {
    id: '3.1.3',
    title: '3.1.3 Palavras incomuns [AAA]',
    level: 'AAA',
    principle: 'Compreensível',
    category: 'Legível',
    description: 'O uso de gírias, jargões, metáforas e figuras de linguagem pode ser obstáculo. Deve ser fornecida forma de tradução ou explicação.',
    keywords: ['conteúdo', 'compreensão', 'glossário'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/unusual-words.html'
  },
  {
    id: '3.1.4',
    title: '3.1.4 Abreviações [AAA]',
    level: 'AAA',
    principle: 'Compreensível',
    category: 'Legível',
    description: 'Uma abreviação ou sigla nem sempre é compreensível. Deve ser fornecida forma de identificar seu significado real.',
    keywords: ['conteúdo', 'compreensão', 'abreviação'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/abbreviations.html'
  },
  {
    id: '3.1.5',
    title: '3.1.5 Nível de leitura [AAA]',
    level: 'AAA',
    principle: 'Compreensível',
    category: 'Legível',
    description: 'Se conteúdo é tão complexo que pessoa com educação elementar completa não consegue entender, será necessário revisar ou usar conteúdo complementar.',
    keywords: ['conteúdo', 'compreensão', 'complexidade'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/reading-level.html'
  },
  {
    id: '3.1.6',
    title: '3.1.6 Pronúncia [AAA]',
    level: 'AAA',
    principle: 'Compreensível',
    category: 'Legível',
    description: 'Palavras regionais específicas e nomes próprios frequentemente têm pronúncia específica. Deve ser fornecida forma de compreender pronúncia correta.',
    keywords: ['conteúdo', 'compreensão', 'pronúncia'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/pronunciation.html'
  },
  {
    id: '3.2.1',
    title: '3.2.1 Em foco [A]',
    level: 'A',
    principle: 'Compreensível',
    category: 'Previsível',
    description: 'Nenhuma mudança contextual que pode desorientar deve ocorrer a partir do foco em qualquer elemento sem confirmação direta.',
    keywords: ['interação', 'previsibilidade', 'foco'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html'
  },
  {
    id: '3.2.2',
    title: '3.2.2 Na entrada [A]',
    level: 'A',
    principle: 'Compreensível',
    category: 'Previsível',
    description: 'Nenhuma mudança contextual que pode desorientar deve ocorrer quando há interação em campo de entrada de dados sem confirmação direta.',
    keywords: ['interação', 'previsibilidade', 'entrada'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/on-input.html'
  },
  {
    id: '3.2.3',
    title: '3.2.3 Navegação consistente [AA]',
    level: 'AA',
    principle: 'Compreensível',
    category: 'Previsível',
    description: 'Consistência sobre formato de apresentação, interação e localização deve ser mantida quando mesmos elementos aparecem em telas diferentes.',
    keywords: ['consistência', 'navegação', 'padrão'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html'
  },
  {
    id: '3.2.4',
    title: '3.2.4 Identificação consistente [AA]',
    level: 'AA',
    principle: 'Compreensível',
    category: 'Previsível',
    description: 'Consistência deve ser mantida sobre formatos de elementos diferentes mas que têm mesma funcionalidade, aumentando capacidade cognitiva.',
    keywords: ['consistência', 'identificação', 'padrão'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification.html'
  },
  {
    id: '3.2.5',
    title: '3.2.5 Mudança a pedido [AAA]',
    level: 'AAA',
    principle: 'Compreensível',
    category: 'Previsível',
    description: 'Qualquer mudança de contexto que pode desorientar pessoas deve ocorrer apenas quando solicitada pela pessoa usando.',
    keywords: ['interação', 'previsibilidade', 'controle'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html'
  },
  {
    id: '3.2.6',
    title: '3.2.6 Ajuda consistente [A]',
    level: 'A',
    principle: 'Compreensível',
    category: 'Previsível',
    description: 'Se opções de ajuda são fornecidas em uma tela, mesmo formato deve ser mantido em todas outras telas onde ajuda é fornecida.',
    keywords: ['ajuda', 'contato', 'consistência'],
    url: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html'
  },
  {
    id: '3.3.1',
    title: '3.3.1 Identificação de erro [A]',
    level: 'A',
    principle: 'Compreensível',
    category: 'Assistência de Entrada',
    description: 'Sempre que mensagem de erro for exibida, deve identificar qual elemento gerou o erro visual e audivelmente.',
    keywords: ['ajuda', 'erro', 'clareza'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html'
  },
  {
    id: '3.3.2',
    title: '3.3.2 Rótulos ou instruções [A]',
    level: 'A',
    principle: 'Compreensível',
    category: 'Assistência de Entrada',
    description: 'Todos os rótulos devem descrever clara e sem ambiguidade o propósito dos campos de formulário.',
    keywords: ['conteúdo', 'SEO', 'clareza', 'prevenção'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html'
  },
  {
    id: '3.3.3',
    title: '3.3.3 Sugestão de erro [AA]',
    level: 'AA',
    principle: 'Compreensível',
    category: 'Assistência de Entrada',
    description: 'Sempre que mensagem de erro for exibida, deve dar dicas de como resolver o erro.',
    keywords: ['ajuda', 'erro', 'clareza'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html'
  },
  {
    id: '3.3.4',
    title: '3.3.4 Prevenção de erro (legal, financeiro, dados) [AA]',
    level: 'AA',
    principle: 'Compreensível',
    category: 'Assistência de Entrada',
    description: 'Forma de confirmação de dados ou possibilidade de cancelar envio deve ser fornecida quando campos envolvem responsabilidade legal, financeira ou dados sensíveis.',
    keywords: ['prevenção', 'erro', 'clareza'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data.html'
  },
  {
    id: '3.3.5',
    title: '3.3.5 Ajuda [AAA]',
    level: 'AAA',
    principle: 'Compreensível',
    category: 'Assistência de Entrada',
    description: 'Forma simples de obter ajuda "contextualizada" com informações exibidas na tela deve ser fornecida.',
    keywords: ['conteúdo', 'SEO', 'clareza', 'prevenção', 'ajuda'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/help.html'
  },
  {
    id: '3.3.6',
    title: '3.3.6 Prevenção de erro (todos) [AAA]',
    level: 'AAA',
    principle: 'Compreensível',
    category: 'Assistência de Entrada',
    description: 'Forma de confirmação de dados ou possibilidade de cancelar envio deve ser fornecida sempre que campos de formulário requerem preenchimento de dados.',
    keywords: ['prevenção', 'erro', 'clareza'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-all.html'
  },
  {
    id: '3.3.7',
    title: '3.3.7 Entrada redundante [A]',
    level: 'A',
    principle: 'Compreensível',
    category: 'Assistência de Entrada',
    description: 'Ao preencher formulário dividido em etapas, qualquer dado inserido deve ser solicitado apenas uma vez durante processo, exceto se essencial.',
    keywords: ['redundância', 'prevenção', 'clareza'],
    url: 'https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html'
  },
  {
    id: '3.3.8',
    title: '3.3.8 Autenticação acessível (mínimo) [AA]',
    level: 'AA',
    principle: 'Compreensível',
    category: 'Assistência de Entrada',
    description: 'Funções que facilitam digitação de senhas em campos de login não devem ser removidas sem justificativa consistente.',
    keywords: ['ajuda', 'clareza', 'interação'],
    url: 'https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html'
  },
  {
    id: '3.3.9',
    title: '3.3.9 Autenticação acessível (aprimorado) [AAA]',
    level: 'AAA',
    principle: 'Compreensível',
    category: 'Assistência de Entrada',
    description: 'Critério 3.3.8 permite algumas exceções. Neste caso, não há exceções.',
    keywords: ['ajuda', 'clareza', 'interação'],
    url: 'https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced.html'
  },

  // Princípio 4: Robusto
  {
    id: '4.1.1',
    title: '4.1.1 Análise [REMOVIDO]',
    level: 'A',
    principle: 'Robusto',
    category: 'Compatível',
    description: 'Este critério foi removido da WCAG 2.2. No passado, fazia sentido existir para garantir aplicação adequada do HTML em tecnologias assistivas, mas atualmente tornou-se redundante devido a atualizações tecnológicas.',
    keywords: ['semântica', 'código', 'removido'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/parsing.html'
  },
  {
    id: '4.1.2',
    title: '4.1.2 Nome, função, valor [A]',
    level: 'A',
    principle: 'Robusto',
    category: 'Compatível',
    description: 'Toda tecnologia assistiva faz uso das propriedades nome, função e valor para identificar adequadamente elementos padronizados do HTML. Qualquer componente customizado deve trazer essas marcações adequadamente.',
    keywords: ['semântica', 'código', 'clareza'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html'
  },
  {
    id: '4.1.3',
    title: '4.1.3 Mensagens de status [AA]',
    level: 'AA',
    principle: 'Robusto',
    category: 'Compatível',
    description: 'Qualquer tipo de mensagem que é resultado de uma ação ou que informa progresso de processo e que é relevante para pessoa deve ser transmitida sem mudança de contexto (foco) na tela.',
    keywords: ['mensagem', 'status', 'feedback'],
    url: 'https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html'
  }
];