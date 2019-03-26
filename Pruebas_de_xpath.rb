require 'nokogiri'

require 'mechanize'

$user_agent = [

'Mozilla/5.0 (Windows; U; Windows NT 6.0; es-AR; rv:1.9.2) Gecko/20100115 Firefox/3.6 (.NET CLR 3.5.30729)',

'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.0.17) Gecko/2009122115 Firefox/3.0.17',

'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.3) Gecko/20091020 Linux Mint/8 (Helena) Firefox/3.5.3',

'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; InfoPath.1; MS-RTC LM 8)',

'Opera/9.20 (Windows NT 6.0; U; en)',

'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.3) Gecko/2008100716 Firefox/3.0.3 Flock/2.0',

'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30)',

'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Avant Browser; Avant Browser; .NET CLR 1.0.3705; .NET CLR 1.1.4322;  Media Center PC 4.0; .NET CLR 2.0.50727; .NET CLR    3.0.04506.30)',

'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/532.5 (KHTML, like Gecko) Chrome/4.0.249.78 Safari/532.5',

'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/525.19 (KHTML, like Gecko) Chrome/1.0.154.53 Safari/525.19',

'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_2; en-us) AppleWebKit/531.21.8 (KHTML, like Gecko) Version/4.0.4 Safari/531.21.10'

]

$agent = Mechanize.new

$agent.verify_mode = OpenSSL::SSL::VERIFY_NONE

#ajax_headers = { 'Accept' => 'application/json, text/plain, */*'}

#def get_page_from_url(url)

  ## FirmMemoIgz.where(url: url).first.raw_html

  ## return Nokogiri::HTML(open(URI.encode(url), "User-Agent" => $user_agent.sample, ssl_verify_mode: OpenSSL::SSL::VERIFY_NONE))

#  $agent.user_agent_alias = Mechanize::AGENT_ALIASES.keys.sample

  ## return $agent.get(URI.encode(url))

#  return $agent.get(url)

#end

def post_page_from_url(url, params, headers = {})

	$agent.user_agent_alias = Mechanize::AGENT_ALIASES.keys.sample

	return $agent.post(url, params, headers)

end
#ajax_headers = { 'Accept' => 'application/json, text/javascript, */*; q=0.01', 'Content-Type' => 'application/json; charset=utf-8', 'X-Requested-With' => 'XMLHttpRequest', 'Referer' => 'https://www.megatone.net/', 'Accept-Encoding' => 'gzip, deflate, br', 'Accept-Language' => 'es-419,es;q=0.9', }
ajax_headers = {'Content-Type' => 'application/json; charset=utf-8'}


#params ={"id_secao":"31"}
#params ={"idMenu":"78","paginaActual":"1","familiasBuscadas":"239,","filtroCategorias":"","filtroGeneros":"","filtroPlataformas":"","filtroMarcas":"","filtroPrestadoras":"","filtroPrecios":"","filtroOfertas":"0","palabraBuscada":"","menorPrecioMultiploDe10":"1290","intervaloPrecios":"370","tipoListado":"Grilla","orden":"0","productosBuscados":"","filtroCuotas":"","NroBoca":0}
params ={"action":"loadmore","page":"1","query":{"post_type":"od_insight","posts_per_page":5,"paged":1,"orderby":"post_date","order":"DESC","s":"*","solr-integrate":true}}

#page = get_page_from_url('')
page = post_page_from_url('https://ogletree.com/wp/wp-admin/admin-ajax.php',params,ajax_headers)

page.at_xpath("")