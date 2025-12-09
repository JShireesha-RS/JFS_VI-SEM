class N:
 def __init__(s,n,h):s.n,nodes[n]:=n,h; s.c,s.f,s.b={},h,None
def ao(nodes,S,G):
 o=[S]
 while o:
  o.sort(key=lambda x:nodes[x].f);x=o.pop(0)
  if x==G:
   p=[];n=S
   while n:p+=[n];n=nodes[n].b;if n==G:break
   return p,nodes[G].f
  if nodes[x].c:
   b,B=None,9e9
   for c,k in nodes[x].c.items():
    t=k+nodes[c].f
    if t<B:b,B=c,t
   nodes[x].b,nodes[x].f=b,B
   for c in nodes[x].c:
    if c not in o:o+=[c]

nodes={i:N(i,h)for i,h in{'A':4,'B':2,'C':3,'D':0,'E':1}.items()}
nodes['A'].c, nodes['B'].c, nodes['C'].c={'B':2,'C':3},{'D':1},{'E':2}
p,c=ao(nodes,'A','D')
print('A->'.join(p),' Cost:',c)
 