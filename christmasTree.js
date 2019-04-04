function makeChristmasTree(height)
{
    var star = "*";
    var space= " ";
    var line;

    for(i=0; i<height ;i++)
    {
        spaceBefore = space.repeat(((height-1)-i));
        line = spaceBefore + star.repeat((i+1)+i);
        console.log(line);
    }

}
function makeChristmasTreeNorepeat(height)
{
    var star = "*";
    var space= " ";
    var line;
    var nbStar;
    var nbSpace;

    for(i=0; i<height ;i++)
    {
        line= "";
        nbSpace = (height-1) -i;
        for(j=0; j<nbSpace; j++)
        {
        line += space;
        }

        nbStar =  (i+1) + i
        for(k=0; k<nbStar; k++)
        {
        line += star
        }

        console.log(line);
    }

}
makeChristmasTree(10)
makeChristmasTreeNorepeat(10)
