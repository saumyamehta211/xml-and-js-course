<?xml version="1.0" encoding="UTF-8"?>
<!-- xsl stylesheet declaration with xsl namespace: 
Namespace tells the xlst processor about which 
element is to be processed and which is used for output purpose only 
--> 
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">   
<!-- xsl template declaration:  
template tells the xlst processor about the section of xml 
document which is to be formatted. It takes an XPath expression. 
In our case, it is matching document root element and will 
tell processor to process the entire document with this template. 
--> 
  <xsl:template match="/"> 
    <!-- HTML tags 
      Used for formatting purpose. Processor will skip them and browser 
      will simply render them. 
    --> 
		
    <html> 
      <body> 
			<table>	
            <!-- for-each processing instruction 
                Looks for each element matching the XPath expression 
            --> 
            <tr bgcolor="#9acd32"> 
                <th>Product name</th> 
                <th>Manufacturer id</th> 
                <th>Description</th> 
                <th>USD price</th>
            </tr> 
                <xsl:for-each select="products/product">
                    <xsl:if test="@shippable='true'">
                        <tr>
                            <td><xsl:value-of select="productName"/></td>
                            <td><xsl:value-of select="manufacturer/@id"/></td>
                            <td><xsl:value-of select="description"/></td>
                            <td><xsl:value-of select="prices/price[1]"/></td>
                        </tr>
                    </xsl:if> 
                </xsl:for-each> 
            </table>

            <table>	
                <!-- for-each processing instruction 
                    Looks for each element matching the XPath expression 
                --> 
                <tr bgcolor="#9acd32"> 
                    <th>Product name</th> 
                    <th>Description</th> 
                    <th>USD price</th> 
                    <th>Euro price</th>
                </tr> 
                <xsl:for-each select="products/product">
                    <xsl:if test="manufacturer/@id='acme'">
                        <tr>
                            <td><xsl:value-of select="productName"/></td>
                            <td><xsl:value-of select="description"/></td>
                            <td><xsl:value-of select="prices/price[1]"/></td>
                            <td><xsl:value-of select="prices/price[3]"/></td>
                        </tr>
                    </xsl:if> 
                </xsl:for-each> 
            </table>
      </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>
