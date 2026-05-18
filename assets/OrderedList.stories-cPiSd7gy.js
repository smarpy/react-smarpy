import{c as u,e as b,j as i,a as c,S as O}from"./Smarpy-8YX_9dTS.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-Dg6mnoBS.js";import"./preload-helper-Dp1pzeXC.js";const L={"ordered-list":"_ordered-list_16b3w_1"};function l(e){const t={...e};delete t.gutter,delete t.fore,delete t.back,delete t.border,delete t.highlighter,delete t.positioning,delete t.sizing,delete t.spacing,delete t.className,delete t.css,delete t.as;const s=[L["ordered-list"]],d=u.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});d&&s.push(...d),e.className&&s.push(e.className);const r={...e.gutter?{"--smarpy-ordered-list-gutter-y":e.gutter&&e.gutter.y?e.gutter.y:void 0}:void 0},m=b.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css},r);return e.as?i(e.as,{...t,className:s.join(" "),css:m}):i("ol",{...t,className:s.join(" "),css:m})}l.__docgenInfo={description:"",methods:[],displayName:"OrderedList"};const N={"ordered-list-item":"_ordered-list-item_16b3w_12"};function n(e){const t={...e};delete t.fore,delete t.back,delete t.border,delete t.highlighter,delete t.positioning,delete t.sizing,delete t.spacing,delete t.className,delete t.css,delete t.as;const s=[N["ordered-list-item"]],d=u.getUtilityClassNames({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning});d&&s.push(...d),e.className&&s.push(e.className);const g={},r=b.getEmotionCss({fore:e.fore,back:e.back,border:e.border,highlighter:e.highlighter,spacing:e.spacing,sizing:e.sizing,positioning:e.positioning,css:e.css},g);return e.as?i(e.as,{...t,className:s.join(" "),css:r}):i("li",{...t,className:s.join(" "),css:r})}n.__docgenInfo={description:"",methods:[],displayName:"OrderedListItem"};const k={title:"Components/OrderedList",component:l,tags:["autodocs"],argTypes:{}},a={args:{},render:e=>i(O,{children:c(l,{...e,children:[i(n,{children:"Item 1"}),i(n,{children:"Item 2"}),c(n,{children:["Item 3",c(l,{...e,children:[i(n,{children:"Item 3-1"}),i(n,{children:"Item 3-2"}),i(n,{children:"Item 3-3"})]})]})]})})};var o,h,I;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {},
  render: props => <Smarpy>
      <OrderedList {...props}>
        <OrderedListItem>
          {"Item 1"}
        </OrderedListItem>
        <OrderedListItem>
          {"Item 2"}
        </OrderedListItem>
        <OrderedListItem>
          {"Item 3"}
          <OrderedList {...props}>
            <OrderedListItem>
              {"Item 3-1"}
            </OrderedListItem>
            <OrderedListItem>
              {"Item 3-2"}
            </OrderedListItem>
            <OrderedListItem>
              {"Item 3-3"}
            </OrderedListItem>
          </OrderedList>
        </OrderedListItem>
      </OrderedList>
    </Smarpy>
}`,...(I=(h=a.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};const z=["Plain"];export{a as Plain,z as __namedExportsOrder,k as default};
