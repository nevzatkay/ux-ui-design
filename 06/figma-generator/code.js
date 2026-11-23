// Rulebook — Homework 06 — editable, named low-fidelity Figma wireframes.
// Run once via Figma Desktop: Plugins > Development > Import plugin from manifest.
// Creates five mobile Auto Layout frames, desktop answer, four exceptional states,
// decision path connectors and documentation directly as native Figma layers.
(async () => {
  const R = {r:1,g:1,b:1};
  const K = {r:0.05,g:0.05,b:0.05};
  const G = {r:0.38,g:0.38,b:0.38};
  const LT = {r:0.84,g:0.84,b:0.84};
  const PL = {r:0.965,g:0.965,b:0.965};
  const N = {r:0.9,g:0.9,b:0.9};
  const black = (c=K) => ({type:'SOLID',color:c,opacity:1});
  await Promise.all([
    figma.loadFontAsync({family:'Inter',style:'Regular'}),
    figma.loadFontAsync({family:'Inter',style:'Bold'})
  ]);

  for (const existing of [...figma.currentPage.children]) {
    if (existing.name === 'HW06 / Complete wireframe board') existing.remove();
  }

  function frame(name,w,h,opts={}) {
    const f = figma.createFrame();
    f.name=name;
    f.resize(w,h);
    f.layoutMode=opts.mode || 'VERTICAL';
    f.primaryAxisSizingMode='FIXED';
    f.counterAxisSizingMode='FIXED';
    f.itemSpacing=opts.gap===undefined?13:opts.gap;
    const p=opts.pad===undefined?17:opts.pad;
    f.paddingTop=p;f.paddingBottom=p;f.paddingLeft=p;f.paddingRight=p;
    f.primaryAxisAlignItems=opts.primaryAlign||'MIN';
    f.counterAxisAlignItems=opts.crossAlign||'MIN';
    f.fills=[black(opts.bg||R)];
    f.strokes=opts.border===false?[]:[black(opts.stroke||K)];
    f.strokeWeight=opts.border===false?0:(opts.strokeWidth||1.5);
    f.cornerRadius=opts.radius===undefined?5:opts.radius;
    f.clipsContent=false;
    return f;
  }
  function nodeText(content,size=16,bold=false,fill=K) {
    const t=figma.createText();
    t.name='Text / '+content.slice(0,48).replace(/\n/g,' ');
    t.fontName={family:'Inter',style:bold?'Bold':'Regular'};
    t.characters=content;
    t.fontSize=size;
    t.fills=[black(fill)];
    t.textAutoResize='HEIGHT';
    t.resize(250,30);
    return t;
  }
  function t(parent,content,size=16,bold=false,color=K){
    const el=nodeText(content,size,bold,color);
    parent.appendChild(el);
    el.layoutAlign='STRETCH';
    return el;
  }
  function box(parent,name,w,h,pad=12,bg=R,stroke=LT){
    const b=frame(name,w,h,{pad,gap:7,bg,stroke,strokeWidth:1.2});
    parent.appendChild(b);b.layoutAlign='STRETCH';return b;
  }
  function note(parent,head,sub,w,h){
    const b=box(parent,'Note / '+head,w,h,12,PL,LT);
    t(b,head,15,true);if(sub)t(b,sub,13,false,G);return b;
  }
  function button(parent,caption,filled=true,h=46){
    const b=frame('Button / '+caption,320,h,{mode:'HORIZONTAL',pad:12,gap:8,
      bg:filled?K:R,stroke:K,primaryAlign:'CENTER',crossAlign:'CENTER'});
    parent.appendChild(b);b.layoutAlign='STRETCH';
    const text=nodeText(caption,15,true,filled?R:K);
    text.textAutoResize='WIDTH_AND_HEIGHT';b.appendChild(text);
    return b;
  }
  function field(parent,label,value,tall=false){
    const f=frame('Field / '+label,320,tall?144:95,{pad:0,gap:8,border:false});
    parent.appendChild(f);f.layoutAlign='STRETCH';
    t(f,label,14,true);
    const input=box(f,'Input / '+label,320,tall?100:53,12,R,G);
    t(input,value,15,false,K);
    return f;
  }
  function space(parent,h=9){
    const f=frame('Spacer',320,h,{border:false,bg:R,pad:0,gap:0});
    parent.appendChild(f);f.layoutAlign='STRETCH';return f;
  }
  const board=figma.createFrame();
  board.name='HW06 / Complete wireframe board';
  board.resize(2830,2720);
  board.x=0;board.y=0;
  board.fills=[black(R)];board.strokes=[];board.clipsContent=false;
  function place(f,x,y){board.appendChild(f);f.x=x;f.y=y;}
  function label(content,x,y,size=20,bold=true,color=K){
    const n=nodeText(content,size,bold,color);board.appendChild(n);n.x=x;n.y=y;
    n.resize(720,70);return n;
  }
  label('RULEBOOK / UX–UI DESIGN',55,40,42,true);
  label('WEEK 06   •   LOW-FIDELITY WIREFRAMES   •   JWM27Z',55,99,18,true,G);
  label('MAIN FLOW  /  GOAL → CHOOSE RULES → ASK → ANSWER → READ SOURCE → CONFIRM',55,166,22,true);
  label('Goal: decide whether UNO +4 may follow +2 using a rule passage from the selected edition.',55,208,17,false,G);

  function mobileShell(num,title,x){
    const f=frame('Screen 0'+num+' / Mobile / '+title,362,820,{pad:19,gap:13,bg:R,stroke:K,strokeWidth:2,radius:13});
    const hdr=frame('Header / Rulebook',324,52,{mode:'HORIZONTAL',pad:10,bg:PL,border:false,gap:10,primaryAlign:'SPACE_BETWEEN',crossAlign:'CENTER'});
    f.appendChild(hdr);hdr.layoutAlign='STRETCH';
    t(hdr,'RULEBOOK',18,true);t(hdr,num+' / 5',13,true,G);
    place(f,x,277);label('0'+num+' / '+title.toUpperCase(),x,246,16,true);
    return f;
  }

  const xs=[55,602,1149,1696,2243];
  const a=mobileShell(1,'Choose game & rules',xs[0]);
  t(a,'Choose game & rules',24,true);t(a,'Use the rules for this game.',14,false,G);
  field(a,'Game','UNO');field(a,'Edition','Standard rules');field(a,'Active expansions','None');
  note(a,'Ruleset available','Source version is shown in results.',322,81);
  space(a,25);button(a,'Continue →');t(a,'Never substitute another edition silently.',12,false,G);

  const b=mobileShell(2,'Ask a rule',xs[1]);
  t(b,'Ask a rule',24,true);t(b,'Describe the move you are checking.',14,false,G);
  note(b,'UNO / Standard rules','Change rules',322,82);
  field(b,'Your question','Can I play a +4 on a +2?',true);
  t(b,'Tip: mention both cards and whose turn.',13,false,G);space(b,25);button(b,'Find rule →');
  note(b,'What happens next?','We check only the selected rulebook.',322,92);
  t(b,'Your question is saved if search fails.',12,false,G);

  const c=mobileShell(3,'Answer & source',xs[2]);
  t(c,'Answer & source',24,true);
  note(c,'SUPPORTED BY SELECTED RULES','',322,52);
  t(c,'No — the +4 cannot follow the +2 here.',24,true);
  t(c,'A short answer is not enough: read the passage.',14,false,G);
  const citation=box(c,'Evidence / Linked rule passage',322,191,15,R,K);
  t(citation,'SOURCE',13,true);t(citation,'UNO rulebook • Standard',17,true);
  t(citation,'Card-play restrictions',14,false,G);
  t(citation,'[Passage preview — source reference]',14,false,G);
  space(c,12);button(c,'Read source →');button(c,'Ask another question',false);
  t(c,'Keep edition and source visible for every ruling.',12,false,G);

  const d=mobileShell(4,'Read source',xs[3]);
  t(d,'Read source',24,true);t(d,'UNO / Standard / Card rules',13,false,G);
  const doc=box(d,'Document / Authorised passage',322,382,15,R,K);
  t(doc,'RULEBOOK REFERENCE',14,true);
  t(doc,'Card-play restrictions',18,true);
  space(doc,18);
  t(doc,'[Exact passage from an authorised rules document appears here]',17,false,K);
  space(doc,18);
  t(doc,'Edition and section remain visible while reading.',14,false,G);
  t(doc,'Reference: rulebook / section',12,false,G);
  space(d,20);button(d,"I've checked the source →");button(d,'Back to answer',false);
  t(d,'Only the player confirms source review.',12,false,G);

  const e=mobileShell(5,'Confirmation',xs[4]);
  t(e,'Ready to continue',24,true);
  note(e,'SOURCE CHECKED','Confirmed by the player',322,88);
  t(e,'Question',15,true);t(e,'Can +4 follow +2?',18,true);
  t(e,'Decision',15,true);t(e,'Not permitted in selected rules',18,true);
  note(e,'Reviewed evidence','UNO / Standard / Card rules',322,105);
  space(e,22);button(e,'Ask another question →');button(e,'Choose another game',false);
  t(e,'The group may still choose house rules.',12,false,G);

  for (let i=0;i<4;i++)label('NEXT →',xs[i]+396,665,15,true,K);
  label('DESKTOP / MAIN DECISION SCREEN 03',55,1163,23,true);
  label('Same content order; two-column Auto Layout keeps the evidence visible next to the ruling.',55,1207,15,false,G);

  const desk=frame('Screen 03 / Desktop / Answer & source',900,645,{pad:22,gap:18,strokeWidth:2,radius:6});
  place(desk,55,1260);
  const dh=frame('Header / Desktop',850,54,{mode:'HORIZONTAL',pad:12,bg:PL,border:false,primaryAlign:'SPACE_BETWEEN',crossAlign:'CENTER'});
  desk.appendChild(dh);dh.layoutAlign='STRETCH';t(dh,'RULEBOOK',18,true);t(dh,'UNO / Standard',14,true);
  t(desk,'Answer & source',27,true);
  const cols=frame('Layout / Answer + evidence columns',850,451,{mode:'HORIZONTAL',pad:0,gap:25,border:false});
  desk.appendChild(cols);cols.layoutAlign='STRETCH';
  const left=frame('Column A / Decision',380,451,{pad:8,gap:16,border:false});
  cols.appendChild(left);
  note(left,'SUPPORTED BY SELECTED RULES','',360,55);
  t(left,'No — the +4 cannot follow the +2 here.',23,true);
  t(left,'A single decision tied to this ruleset.',15,false,G);space(left,85);
  button(left,'Read source →');button(left,'Ask another question',false);
  const right=frame('Column B / Evidence',415,451,{pad:16,gap:17,stroke:K});
  cols.appendChild(right);
  t(right,'SOURCE DETAILS',15,true);t(right,'UNO rulebook',21,true);t(right,'Standard edition',15,false,G);
  t(right,'Card-play restrictions',16,true);
  space(right,30);t(right,'[Preview of cited passage]',17,false,G);space(right,30);
  t(right,'Full passage opens in source view.',13,false,G);
  t(right,'Reference: rulebook / section',12,false,G);

  label('CRITICAL EXCEPTION STATES',1003,1163,23,true);
  label('No unsupported guesses. Preserve the user’s entered context.',1003,1207,15,false,G);
  function stateCard(id,src,title,error,explanation,action,x){
    const f=frame('State '+id+' / '+src+' / '+title,412,645,{pad:19,gap:21,strokeWidth:1.7});
    place(f,x,1260);note(f,id+' / '+src,'Critical state',372,76);
    t(f,title,22,true);note(f,error,'',372,116);
    t(f,'RECOVERY',15,true);t(f,explanation,15,false,G);
    space(f,90);button(f,action);t(f,'No unsupported yes/no ruling.',12,false,G);
    return f;
  }
  stateCard('E1','Screen 01','Edition unavailable','Rules not available for this edition.','Never silently switch to another edition.','Choose supported rules',1000);
  stateCard('E2','Screen 02','More detail needed','Which card is played, and on what?','Preserve original question when asking for detail.','Add missing detail',1430);
  stateCard('E3','Screen 03','Cannot verify','No matching passage supports a yes/no.','Show what is missing instead of guessing.','Edit question',1860);
  stateCard('E4','Screen 02','Connection error','Rules could not load.','Keep edition and question for a retry.','Retry search',2290);

  label('ANNOTATIONS / LAYOUT LOGIC',55,2000,26,true);
  const annotations=[
    ['A1  TASK-FIRST','Entry starts with the player’s goal, not account or dashboard.'],
    ['A2  SOURCE FIRST','The main decision includes an inspectable evidence link.'],
    ['A3  CONFIRMATION','Success follows explicit passage review, not a guessed answer.'],
    ['A4  EXCEPTIONS','Four real-risk branches keep input and show recovery actions.'],
    ['A5  AUTO LAYOUT','Screen, card, form, button and desktop columns use Auto Layout.'],
    ['A6  LABEL VALIDATION','Words remain provisional until Week 05 label testing is completed.']
  ];
  annotations.forEach((item,i)=>{
    const col=i%3,row=Math.floor(i/3),x=55+col*920,y=2070+row*205;
    const f=frame('Annotation / '+item[0],870,180,{pad:17,gap:15,stroke:LT});
    place(f,x,y);t(f,item[0],17,true);t(f,item[1],16,false,G);
  });

  figma.currentPage.selection=[board];
  figma.viewport.scrollAndZoomIntoView([board]);
  figma.closePlugin('Week 6 wireframes generated with native Figma Auto Layout.');
})().catch(err=>{
  figma.closePlugin('Unable to create wireframes: '+String(err));
});
