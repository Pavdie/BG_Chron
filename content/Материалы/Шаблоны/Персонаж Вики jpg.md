<%* let al= tp.frontmatter.aliases;
if (al == undefined) {al = "Нет данных";}  
let org = tp.frontmatter.organisation; 
if (org == undefined) {org = "Нет данных";} 
let state = tp.frontmatter.dead;  
let status= " "; 
if (state == false ) { status="Жив(а)";} else if (state == true) {status="Мёртв(а)";} else {status = "Нет данных";}
let loc = tp.frontmatter.location;
if (loc == undefined) {loc = "Нет данных";} 
let ra = tp.frontmatter.race;
if (ra == undefined) {ra = "Нет данных";} 
let ge = tp.frontmatter.gender;
if (ge == undefined) {ge = "Нет данных";} 
%>
> [!infobox]
> 
> ## <%tp.file.title%>
> 
> ![[<%tp.file.title%>.jpg]]
> ![[<%tp.file.title%>.png]]
> 
> ### Описание
> 
> | Тип | Персонаж |
> | --- | --- |
> | Другие имена| <%al%> |
> | Местонахождение | <% loc %> |
> | Раса | <% ra %> |
> | Пол | <% ge %> |
> | Организация | <% org %> |
> | Статус | <% status %> |

