walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bMatty\b/g, "Matty the bitch");
	v = v.replace(/\bmatty\b/g, "matty the bitch");
	v = v.replace(/\bMathew\b/g, "Matty the bitch");
	v = v.replace(/\bmathew\b/g, "matty the bitch");
	
	textNode.nodeValue = v;
}


