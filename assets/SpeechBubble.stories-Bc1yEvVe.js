import{c,e as u,j as i,a as r,S as v}from"./Smarpy-8YX_9dTS.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-Dg6mnoBS.js";import"./preload-helper-Dp1pzeXC.js";const l={"speech-bubble":"_speech-bubble_1eojq_1","is-avatar-small":"_is-avatar-small_1eojq_84","is-avatar-large":"_is-avatar-large_1eojq_89","is-avatar-circle":"_is-avatar-circle_1eojq_94","speech-bubble-avatar-container":"_speech-bubble-avatar-container_1eojq_107","speech-bubble-avatar":"_speech-bubble-avatar_1eojq_107","avatar-has-border":"_avatar-has-border_1eojq_110","name-has-border":"_name-has-border_1eojq_115","speech-bubble-content-container":"_speech-bubble-content-container_1eojq_115","speech-bubble-name":"_speech-bubble-name_1eojq_115","message-has-border":"_message-has-border_1eojq_120","speech-bubble-message":"_speech-bubble-message_1eojq_120","is-border-width-xthin":"_is-border-width-xthin_1eojq_125","is-border-width-thin":"_is-border-width-thin_1eojq_130","is-border-width-medium":"_is-border-width-medium_1eojq_135","is-border-width-thick":"_is-border-width-thick_1eojq_140","is-border-width-xthick":"_is-border-width-xthick_1eojq_145","speech-bubble-message-inner":"_speech-bubble-message-inner_1eojq_217","is-left":"_is-left_1eojq_220","is-right":"_is-right_1eojq_262","is-border-style-solid":"_is-border-style-solid_1eojq_304","is-border-style-dashed":"_is-border-style-dashed_1eojq_311","is-border-style-dotted":"_is-border-style-dotted_1eojq_318"};function o(e){const a={...e};delete a.colorName,delete a.avatarSize,delete a.borderStyle,delete a.borderWidth,delete a.avatarHasBorder,delete a.isRight,delete a.isAvatarCircle,delete a.fore,delete a.back,delete a.border,delete a.highlighter,delete a.positioning,delete a.sizing,delete a.spacing,delete a.className,delete a.css,delete a.as;const t=[l["speech-bubble"]];e.isRight?t.push(l["is-right"]):t.push(l["is-left"]),e.avatarSize&&t.push(l[`is-avatar-${e.avatarSize}`]),e.avatarHasBorder&&t.push(l["avatar-has-border"]),e.borderWidth&&t.push(l[`is-border-width-${e.borderWidth}`]),e.isAvatarCircle&&t.push(l["is-avatar-circle"]);const s=c.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});s&&t.push(...s),e.className&&t.push(e.className);const O={...e.colorName?{"--smarpy-speech-bubble-color-fore":`var(--smarpy-color-${e.colorName}-speech-bubble-fore, var(--smarpy-color-${e.colorName}-fore))`,"--smarpy-speech-bubble-color-back":`var(--smarpy-color-${e.colorName}-speech-bubble-back, var(--smarpy-color-${e.colorName}-back))`,"--smarpy-speech-bubble-color-border":`var(--smarpy-color-${e.colorName}-speech-bubble-border, var(--smarpy-color-${e.colorName}-border))`,"--smarpy-speech-bubble-selection-color-fore":`var(--smarpy-color-${e.colorName}-speech-bubble-selection-fore, var(--smarpy-color-${e.colorName}-selection-fore))`,"--smarpy-speech-bubble-selection-color-back":`var(--smarpy-color-${e.colorName}-speech-bubble-selection-back, var(--smarpy-color-${e.colorName}-selection-back))`,"--smarpy-speech-bubble-avatar-color-back":`var(--smarpy-color-${e.colorName}-speech-bubble-back)`,"--smarpy-speech-bubble-avatar-color-border":`var(--smarpy-color-${e.colorName}-speech-bubble-border)`,"--smarpy-speech-bubble-name-color-fore":`var(--smarpy-color-${e.colorName}-speech-bubble-name-fore)`,"--smarpy-speech-bubble-name-color-back":`var(--smarpy-color-${e.colorName}-speech-bubble-name-back)`,"--smarpy-speech-bubble-name-color-border":`var(--smarpy-color-${e.colorName}-speech-bubble-name-border)`,"--smarpy-speech-bubble-message-color-fore":`var(--smarpy-color-${e.colorName}-speech-bubble-message-fore)`,"--smarpy-speech-bubble-message-color-back":`var(--smarpy-color-${e.colorName}-speech-bubble-message-back)`,"--smarpy-speech-bubble-message-color-border":`var(--smarpy-color-${e.colorName}-speech-bubble-message-border)`}:void 0},y=u.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css},O);return e.as?i(e.as,{...a,className:t.join(" "),css:y}):i("div",{...a,className:t.join(" "),css:y})}o.__docgenInfo={description:"",methods:[],displayName:"SpeechBubble"};const T={"speech-bubble-avatar":"_speech-bubble-avatar_1eojq_107"};function b(e){const a={...e};delete a.fore,delete a.back,delete a.border,delete a.highlighter,delete a.positioning,delete a.sizing,delete a.spacing,delete a.className,delete a.css,delete a.as;const t=[T["speech-bubble-avatar"]],s=c.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});s&&t.push(...s),e.className&&t.push(e.className);const n=u.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return e.as?i(e.as,{...a,className:t.join(" "),css:n}):i("img",{...a,className:t.join(" "),css:n})}b.__docgenInfo={description:"",methods:[],displayName:"SpeechBubbleAvatar"};const F={"speech-bubble-avatar-container":"_speech-bubble-avatar-container_1eojq_107"};function d(e){const a={...e};delete a.as,delete a.fore,delete a.back,delete a.border,delete a.highlighter,delete a.positioning,delete a.sizing,delete a.spacing,delete a.className,delete a.css,delete a.as;const t=[F["speech-bubble-avatar-container"]],s=c.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});s&&t.push(...s),e.className&&t.push(e.className);const n=u.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return e.as?i(e.as,{...a,className:t.join(" "),css:n}):i("div",{...a,className:t.join(" "),css:n})}d.__docgenInfo={description:"",methods:[],displayName:"SpeechBubbleAvatarContainer"};const G={"speech-bubble-content-container":"_speech-bubble-content-container_1eojq_115"};function m(e){const a={...e};delete a.as,delete a.fore,delete a.back,delete a.border,delete a.highlighter,delete a.positioning,delete a.sizing,delete a.spacing,delete a.className,delete a.css,delete a.as;const t=[G["speech-bubble-content-container"]],s=c.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});s&&t.push(...s),e.className&&t.push(e.className);const n=u.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return e.as?i(e.as,{...a,className:t.join(" "),css:n}):i("div",{...a,className:t.join(" "),css:n})}m.__docgenInfo={description:"",methods:[],displayName:"SpeechBubbleContentContainer"};const J={"speech-bubble-message":"_speech-bubble-message_1eojq_120"};function h(e){const a={...e};delete a.as,delete a.fore,delete a.back,delete a.border,delete a.highlighter,delete a.positioning,delete a.sizing,delete a.spacing,delete a.className,delete a.css,delete a.as;const t=[J["speech-bubble-message"]],s=c.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});s&&t.push(...s),e.className&&t.push(e.className);const n=u.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return e.as?i(e.as,{...a,className:t.join(" "),css:n}):i("div",{...a,className:t.join(" "),css:n})}h.__docgenInfo={description:"",methods:[],displayName:"SpeechBubbleMessage"};const K={"speech-bubble-message-inner":"_speech-bubble-message-inner_1eojq_217"};function g(e){const a={...e};delete a.fore,delete a.back,delete a.border,delete a.highlighter,delete a.positioning,delete a.sizing,delete a.spacing,delete a.className,delete a.css,delete a.as;const t=[K["speech-bubble-message-inner"]],s=c.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});s&&t.push(...s),e.className&&t.push(e.className);const n=u.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return e.as?i(e.as,{...a,className:t.join(" "),css:n}):i("div",{...a,className:t.join(" "),css:n})}g.__docgenInfo={description:"",methods:[],displayName:"SpeechBubbleMessageInner"};const Q={"speech-bubble-name":"_speech-bubble-name_1eojq_115"};function p(e){const a={...e};delete a.fore,delete a.back,delete a.border,delete a.highlighter,delete a.positioning,delete a.sizing,delete a.spacing,delete a.className,delete a.css,delete a.as;const t=[Q["speech-bubble-name"]],s=c.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});s&&t.push(...s),e.className&&t.push(e.className);const n=u.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css});return e.as?i(e.as,{...a,className:t.join(" "),css:n}):i("div",{...a,className:t.join(" "),css:n})}p.__docgenInfo={description:"",methods:[],displayName:"SpeechBubbleName"};const ee={title:"Components/SpeechBubble",component:o,tags:["autodocs"],argTypes:{colorName:{control:"text"}}},S={args:{},render:e=>i(v,{children:r(o,{...e,children:[i(d,{children:i(b,{src:"https://smartupcorp.github.io/smarpy/images/avatar/kaminorse/kaminorse.png",alt:"avatar"})}),r(m,{children:[i(p,{children:"Name"}),i(h,{children:i(g,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]})]})})},N={args:{avatarSize:"large"},render:e=>i(v,{children:r(o,{...e,children:[i(d,{children:i(b,{src:"https://smartupcorp.github.io/smarpy/images/avatar/kaminorse/kaminorse.png",alt:"avatar"})}),r(m,{children:[i(p,{children:"Name"}),i(h,{children:i(g,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]})]})})},f={args:{avatarSize:"small"},render:e=>i(v,{children:r(o,{...e,children:[i(d,{children:i(b,{src:"https://smartupcorp.github.io/smarpy/images/avatar/kaminorse/kaminorse.png",alt:"avatar"})}),r(m,{children:[i(p,{children:"Name"}),i(h,{children:i(g,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]})]})})},_={args:{avatarHasBorder:!0},render:e=>i(v,{children:r(o,{...e,children:[i(d,{children:i(b,{src:"https://smartupcorp.github.io/smarpy/images/avatar/kaminorse/kaminorse.png",alt:"avatar"})}),r(m,{children:[i(p,{children:"Name"}),i(h,{children:i(g,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]})]})})},B={args:{isAvatarCircle:!0},render:e=>i(v,{children:r(o,{...e,children:[i(d,{children:i(b,{src:"https://smartupcorp.github.io/smarpy/images/avatar/kaminorse/kaminorse.png",alt:"avatar"})}),r(m,{children:[i(p,{children:"Name"}),i(h,{children:i(g,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]})]})})},q={args:{isRight:!0},render:e=>i(v,{children:r(o,{...e,children:[r(m,{children:[i(p,{children:"Name"}),i(h,{children:i(g,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]}),i(d,{children:i(b,{src:"https://smartupcorp.github.io/smarpy/images/avatar/kaminorse/kaminorse.png",alt:"avatar"})})]})})};var C,k,j;S.parameters={...S.parameters,docs:{...(C=S.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {},
  render: props => <Smarpy>
      <SpeechBubble {...props}>
        <SpeechBubbleAvatarContainer>
          <SpeechBubbleAvatar src="https://smartupcorp.github.io/smarpy/images/avatar/kaminorse/kaminorse.png" alt="avatar" />
        </SpeechBubbleAvatarContainer>
        <SpeechBubbleContentContainer>
          <SpeechBubbleName>{"Name"}</SpeechBubbleName>
          <SpeechBubbleMessage>
            <SpeechBubbleMessageInner>
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </SpeechBubbleMessageInner>
          </SpeechBubbleMessage>
        </SpeechBubbleContentContainer>
      </SpeechBubble>
    </Smarpy>
}`,...(j=(k=S.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var z,x,A;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    avatarSize: "large"
  },
  render: props => <Smarpy>
      <SpeechBubble {...props}>
        <SpeechBubbleAvatarContainer>
          <SpeechBubbleAvatar src="https://smartupcorp.github.io/smarpy/images/avatar/kaminorse/kaminorse.png" alt="avatar" />
        </SpeechBubbleAvatarContainer>
        <SpeechBubbleContentContainer>
          <SpeechBubbleName>{"Name"}</SpeechBubbleName>
          <SpeechBubbleMessage>
            <SpeechBubbleMessageInner>
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </SpeechBubbleMessageInner>
          </SpeechBubbleMessage>
        </SpeechBubbleContentContainer>
      </SpeechBubble>
    </Smarpy>
}`,...(A=(x=N.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var M,$,I;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    avatarSize: "small"
  },
  render: props => <Smarpy>
      <SpeechBubble {...props}>
        <SpeechBubbleAvatarContainer>
          <SpeechBubbleAvatar src="https://smartupcorp.github.io/smarpy/images/avatar/kaminorse/kaminorse.png" alt="avatar" />
        </SpeechBubbleAvatarContainer>
        <SpeechBubbleContentContainer>
          <SpeechBubbleName>{"Name"}</SpeechBubbleName>
          <SpeechBubbleMessage>
            <SpeechBubbleMessageInner>
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </SpeechBubbleMessageInner>
          </SpeechBubbleMessage>
        </SpeechBubbleContentContainer>
      </SpeechBubble>
    </Smarpy>
}`,...(I=($=f.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var U,E,L;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    avatarHasBorder: true
  },
  render: props => <Smarpy>
      <SpeechBubble {...props}>
        <SpeechBubbleAvatarContainer>
          <SpeechBubbleAvatar src="https://smartupcorp.github.io/smarpy/images/avatar/kaminorse/kaminorse.png" alt="avatar" />
        </SpeechBubbleAvatarContainer>
        <SpeechBubbleContentContainer>
          <SpeechBubbleName>{"Name"}</SpeechBubbleName>
          <SpeechBubbleMessage>
            <SpeechBubbleMessageInner>
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </SpeechBubbleMessageInner>
          </SpeechBubbleMessage>
        </SpeechBubbleContentContainer>
      </SpeechBubble>
    </Smarpy>
}`,...(L=(E=_.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var D,w,P;B.parameters={...B.parameters,docs:{...(D=B.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isAvatarCircle: true
  },
  render: props => <Smarpy>
      <SpeechBubble {...props}>
        <SpeechBubbleAvatarContainer>
          <SpeechBubbleAvatar src="https://smartupcorp.github.io/smarpy/images/avatar/kaminorse/kaminorse.png" alt="avatar" />
        </SpeechBubbleAvatarContainer>
        <SpeechBubbleContentContainer>
          <SpeechBubbleName>{"Name"}</SpeechBubbleName>
          <SpeechBubbleMessage>
            <SpeechBubbleMessageInner>
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </SpeechBubbleMessageInner>
          </SpeechBubbleMessage>
        </SpeechBubbleContentContainer>
      </SpeechBubble>
    </Smarpy>
}`,...(P=(w=B.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var H,R,W;q.parameters={...q.parameters,docs:{...(H=q.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    isRight: true
  },
  render: props => <Smarpy>
      <SpeechBubble {...props}>
        <SpeechBubbleContentContainer>
          <SpeechBubbleName>{"Name"}</SpeechBubbleName>
          <SpeechBubbleMessage>
            <SpeechBubbleMessageInner>
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </SpeechBubbleMessageInner>
          </SpeechBubbleMessage>
        </SpeechBubbleContentContainer>
        <SpeechBubbleAvatarContainer>
          <SpeechBubbleAvatar src="https://smartupcorp.github.io/smarpy/images/avatar/kaminorse/kaminorse.png" alt="avatar" />
        </SpeechBubbleAvatarContainer>
      </SpeechBubble>
    </Smarpy>
}`,...(W=(R=q.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const ae=["Plain","AvatarSizeLarge","AvatarSizeSmall","AvatarHasBorder","IsAvatarCircle","IsRight"];export{_ as AvatarHasBorder,N as AvatarSizeLarge,f as AvatarSizeSmall,B as IsAvatarCircle,q as IsRight,S as Plain,ae as __namedExportsOrder,ee as default};
