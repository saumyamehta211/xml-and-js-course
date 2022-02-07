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
        <head>
            <title>Catalog</title>
        </head>
        <body>
            <h1>Catalog</h1>
            <ol>
                <xsl:for-each select="catalog/product">
                    <li>
                        <article>
                            <h2><xsl:value-of select="@product_id"/></h2>
                            <p><xsl:value-of select="@description"/></p>
                            <table>
                                <tr bgcolor="#9acd32"> 
                                    <th>Item Number</th> 
                                    <th>Price</th> 
                                    <th>Gender</th> 
                                    <th>Small</th>
                                    <th>Medium</th>
                                    <th>Large</th>
                                    <th>Extra Large</th>
                                </tr>
                                <xsl:for-each select="catalog_item">
                                <tr>
                                    <td><xsl:value-of select="item_number"/></td>
                                    <td><xsl:value-of select="price"/></td>
                                    <td><xsl:if test="@gender='Men'">M</xsl:if><xsl:if test="@gender='Women'">W</xsl:if></td>
                                    <td>
                                        <xsl:if test="size[@description='Small']">
                                            <table>
                                                <tr>
                                                    <th>Color</th>
                                                    <th>Image</th>
                                                </tr>
                                                <xsl:for-each select="size[@description='Small']/color_swatch">
                                                    <tr>
                                                        <td><xsl:value-of select="current()"/></td>
                                                        <td><xsl:value-of select="@image"/></td>
                                                    </tr>
                                                </xsl:for-each>
                                            </table>
                                        </xsl:if>
                                    </td>
                                    <td>
                                        <xsl:if test="size[@description='Medium']">
                                            <table>
                                                <tr>
                                                    <th>Color</th>
                                                    <th>Image</th>
                                                </tr>
                                                <xsl:for-each select="size[@description='Medium']/color_swatch">
                                                    <tr>
                                                        <td><xsl:value-of select="current()"/></td>
                                                        <td><xsl:value-of select="@image"/></td>
                                                    </tr>
                                                </xsl:for-each>
                                            </table>
                                        </xsl:if>
                                    </td>
                                    <td>
                                        <xsl:if test="size[@description='Large']">
                                            <table>
                                                <tr>
                                                    <th>Color</th>
                                                    <th>Image</th>
                                                </tr>
                                                <xsl:for-each select="size[@description='Large']/color_swatch">
                                                    <tr>
                                                        <td><xsl:value-of select="current()"/></td>
                                                        <td><xsl:value-of select="@image"/></td>
                                                    </tr>
                                                </xsl:for-each>
                                            </table>
                                        </xsl:if>
                                    </td>
                                    <td>
                                        <xsl:if test="size[@description='Extra Large']">
                                            <table>
                                                <tr>
                                                    <th>Color</th>
                                                    <th>Image</th>
                                                </tr>
                                                <xsl:for-each select="size[@description='Extra Large']/color_swatch">
                                                    <tr>
                                                        <td><xsl:value-of select="current()"/></td>
                                                        <td><xsl:value-of select="@image"/></td>
                                                    </tr>
                                                </xsl:for-each>
                                            </table>
                                        </xsl:if>
                                    </td>
                                </tr>
                                </xsl:for-each>
                            </table>
                        </article>
                    </li>
                </xsl:for-each>
            </ol>
        </body> 
    </html> 
  </xsl:template>  
</xsl:stylesheet>
