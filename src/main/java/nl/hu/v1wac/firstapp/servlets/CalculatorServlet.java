package nl.hu.v1wac.firstapp.servlets;

import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.http.*;

public class CalculatorServlet extends HttpServlet {
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		String name = req.getParameter("username");
		int a1= Integer.parseInt(req.getParameter("getal1"));
        int a2= Integer.parseInt(req.getParameter("getal2"));
        String button1 = req.getParameter("action");
        
		PrintWriter out = resp.getWriter();
		resp.setContentType("text/html");
		out.println("<!DOCTYPE html>");
		out.println("<html>");
		out.println(" <title>Calculator Example</title>");
		out.println(" <body>");
		out.println(" <h2>Calculator webapplication example</h2>");
		if (button1.equals("+"))
        {
            out.println("<h1>Addition</h1>"+(a1+a2));
        }
		else if (button1.equals("-"))
        {
            out.println("<h1>Addition</h1>"+(a1-a2));
        }
		else if (button1.equals("/"))
        {
            out.println("<h1>Addition</h1>"+(a1/a2));
        }
		else
        {
            out.println("<h1>Addition</h1>"+(a1*a2));
        }
		out.println(" </body>");
		out.println("</html>");
	}
}