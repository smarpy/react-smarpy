import{i as e}from"./preload-helper-CT_b8DTk.js";import{c as t,l as n,n as r,s as i,t as a}from"./Smarpy-3Wt67r4F.js";import{a as o,i as s,n as c,o as l,r as u,t as d}from"./MessageHeader-Dyjt_tMF.js";var f,p,m,h;e((()=>{l(),a(),c(),s(),i(),f={title:`Components/Message`,component:o,tags:[`autodocs`],argTypes:{colorName:{control:`text`}}},p={args:{colorName:void 0},render:e=>t(r,{children:n(o,{...e,children:[t(d,{children:`Header`}),t(u,{children:`Body`})]})})},m={args:{colorName:void 0},render:e=>t(r,{children:t(o,{...e,children:t(u,{children:`Body`})})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    colorName: undefined
  },
  render: props => <Smarpy>
      <Message {...props}>
        <MessageHeader>
          {"Header"}
        </MessageHeader>
        <MessageBody>
          {"Body"}
        </MessageBody>
      </Message>
    </Smarpy>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    colorName: undefined
  },
  render: props => <Smarpy>
      <Message {...props}>
        <MessageBody>
          {"Body"}
        </MessageBody>
      </Message>
    </Smarpy>
}`,...m.parameters?.docs?.source}}},h=[`Plain`,`BodyOnly`]}))();export{m as BodyOnly,p as Plain,h as __namedExportsOrder,f as default};