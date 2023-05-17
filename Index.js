function display(val)

        {

            if (val=="del")

            {

                let b=(document.getElementById("txt").value);

                b=b.substring(0,b.length-1);

                document.getElementById("txt").value=b;

            }

            else if(val=="clr")

            {

                document.getElementById("txt").value=" ";

            }

            else if( val=="root")

            {

                document.getElementById("txt").value+="√";

            }

            else

            {

                document.getElementById("txt").value+=val;

            }

        }

        function pm()

        {

            let b=document.getElementById("txt").value;

            b=-(b.substring(b.length-1,b.length));

            display("del");

            document.getElementById("txt").value+=b;

        }

        function ev()

        {

            let b=(document.getElementById("txt").value)

            b=sqrts(b);

            b=eval(b);

            document.getElementById("txt").value=b;

        }

        function sqrts(b)

        {

            let a;

            for (let i=0;i<b.length;i++)

            {

                if (b[i]=="√")

                {

                    a=Math.sqrt(b[i+1]);

                    b=b.substring(0,i)+a;

                }

                

            }

            return b;

        }
