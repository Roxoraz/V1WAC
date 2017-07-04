package nl.hu.v1wac.firstapp.webservices;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/ip")
public class IpResource {
	@GET
	@Produces("application/json")
	public String getCountries() throws IOException {
		URL api = new URL("http://ip-api.com/json");
		BufferedReader in = new BufferedReader(new InputStreamReader(api.openStream()));
		return in.readLine();
	}
}
