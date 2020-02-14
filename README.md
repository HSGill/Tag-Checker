# Tag-Checker
Tag Checker Technical Test
 a program to check that all the tags in a given piece of text (a paragraph) are correctly nested, and that there
are no missing or extra tags. An opening tag for this problem is enclosed by angle brackets, and contains exactly
one upper case letter. The corresponding closing tag will be the same letter preceded
by the symbol /.
If the paragraph is correctly tagged then output the line “Correctly tagged paragraph”, otherwise output a line of
the form “Expected <expected> found <unexpected>” where <expected> is the closing tag matching the most
recent unmatched tag and <unexpected> is the closing tag encountered. If either of these is the end of paragraph,
i.e. there is either an unmatched opening tag or no matching closing tag at the end of the paragraph, then replace
the tag or closing tag with #. These points are illustrated in the examples below which should be followed exactly
as far as spacing is concerned.
