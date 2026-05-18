import{c as I,e as U,j as i,a as l,S as L}from"./Smarpy-8YX_9dTS.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-Dg6mnoBS.js";import"./preload-helper-Dp1pzeXC.js";const N={"unordered-list":"_unordered-list_i4xul_1"};function o(e){const t={...e};delete t.gutter,delete t.fore,delete t.back,delete t.border,delete t.highlighter,delete t.positioning,delete t.sizing,delete t.spacing,delete t.className,delete t.css,delete t.as;const s=[N["unordered-list"]],d=I.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});d&&s.push(...d),e.className&&s.push(e.className);const r={...e.gutter?{"--smarpy-unordered-list-gutter-y":e.gutter&&e.gutter.y?e.gutter.y:void 0}:void 0},g=U.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css},r);return e.as?i(e.as,{...t,className:s.join(" "),css:g}):i("ul",{...t,className:s.join(" "),css:g})}o.__docgenInfo={description:"",methods:[],displayName:"UnorderedList"};const b={"unordered-list-item":"_unordered-list-item_i4xul_12"};function n(e){const t={...e};delete t.fore,delete t.back,delete t.border,delete t.highlighter,delete t.positioning,delete t.sizing,delete t.spacing,delete t.className,delete t.css,delete t.as;const s=[b["unordered-list-item"]],d=I.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});d&&s.push(...d),e.className&&s.push(e.className);const c={},r=U.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css},c);return e.as?i(e.as,{...t,className:s.join(" "),css:r}):i("li",{...t,className:s.join(" "),css:r})}n.__docgenInfo={description:"",methods:[],displayName:"UnorderedListItem"};const k={title:"Components/UnorderedList",component:o,tags:["autodocs"],argTypes:{}},a={args:{},render:e=>i(L,{children:l(o,{...e,children:[i(n,{children:"Item 1"}),i(n,{children:"Item 2"}),l(n,{children:["Item 3",l(o,{...e,children:[i(n,{children:"Item 3-1"}),i(n,{children:"Item 3-2"}),i(n,{children:"Item 3-3"})]})]})]})})};var m,h,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: props => <Smarpy>
      <UnorderedList {...props}>
        <UnorderedListItem>
          {"Item 1"}
        </UnorderedListItem>
        <UnorderedListItem>
          {"Item 2"}
        </UnorderedListItem>
        <UnorderedListItem>
          {"Item 3"}
          <UnorderedList {...props}>
            <UnorderedListItem>
              {"Item 3-1"}
            </UnorderedListItem>
            <UnorderedListItem>
              {"Item 3-2"}
            </UnorderedListItem>
            <UnorderedListItem>
              {"Item 3-3"}
            </UnorderedListItem>
          </UnorderedList>
        </UnorderedListItem>
      </UnorderedList>
    </Smarpy>
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const z=["Plain"];export{a as Plain,z as __namedExportsOrder,k as default};
