<#--
  This file has been claimed for ownership from @keycloakify/email-native version 260007.0.0.
  To relinquish ownership and restore this file to its original content, run the following command:
  
  $ npx keycloakify own --path 'email/html/template.ftl' --revert
-->

<#macro emailLayout>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="format-detection" content="telephone=no">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Reset password</title>
   <style type="text/css" emogrify="no">
         #outlook a { padding:0; }
         .ExternalClass { width:100%; }
         .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%;}
         table td { border-collapse: collapse; mso-line-height-rule: exactly; }
         .editable.image { font-size: 0 !important; line-height: 0 !important; }
         .nl2go_preheader { display: none !important; mso-hide:all !important;
         mso-line-height-rule: exactly; visibility: hidden !important;
         line-height: 0px !important; font-size: 0px !important; }
         body { width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0; }
         img { outline:none; text-decoration:none; -ms-interpolation-mode: bicubic; }
         a img { border:none; }
         table { border-collapse:collapse; mso-table-lspace:0p; mso-table-rspace:0pt; }
         th { font-weight: normal; text-align: left; }
         .br-12 { border-radius: 12px !important }
         *[class="gmail-fix"] { display: none !important; }

   </style>
   <style type="text/css" emogrify="no"> @media (max-width: 600px) { .gmx-killpill { content: ' \03D1';} }</style>
   <style type="text/css" emogrify="no">@media (max-width: 600px) { .gmx-killpill { content: ' \03D1';}
         .r0-c { box-sizing: border-box !important; text-align: center !important; valign: top !important; width: 320px !important }
         .r1-o { border-style: solid !important; margin: 0 auto 0 auto !important; width: 320px !important }
         .r2-c { box-sizing: border-box !important; text-align: center !important; valign: top !important; width: 100% !important }
         .r3-o { border-style: solid !important; margin: 0 auto 0 auto !important; width: 100% !important }
         .r4-i { background-color: #ffffff !important; padding-bottom: 20px !important; padding-left: 15px !important; padding-right: 15px !important; padding-top: 20px !important }
         .r5-c { box-sizing: border-box !important; display: block !important; valign: top !important; width: 100% !important }
         .r6-o { border-style: solid !important; width: 100% !important }
         .r7-i { padding-left: 0px !important; padding-right: 0px !important }
         .r8-c { box-sizing: border-box !important; text-align: center !important; valign: top !important; width: 200px !important}
         .r9-o { background-size: auto !important; border-style: solid !important; margin: 0 auto 0 auto !important; width: 200px !important }
         .r10-i { padding-bottom: 15px !important; padding-top: 15px !important }
         .r11-i { background-color: #ffffff !important; padding-bottom: 20px !important; padding-left: 10px !important; padding-right: 10px !important; padding-top: 20px !important }
         .r12-c { box-sizing: border-box !important; text-align: left !important; valign: top !important; width: 100% !important }
         .r13-o { border-style: solid !important; margin: 0 auto 0 0 !important; width: 100% !important}
         .r14-i { padding-top: 15px !important; text-align: left !important }
         .r15-i { padding-bottom: 15px !important; padding-top: 15px !important; text-align: left !important }
         .r16-o { border-style: solid !important; margin: 0 auto 0 auto !important; margin-bottom: 15px !important; margin-top: 15px !important; width: 100% !important }
         .r17-i { text-align: center !important }
         .r18-r { background-color: #0092ff !important; border-color: #0092ff !important; border-radius: 4px !important; border-width: 1px !important; box-sizing: border-box; height: initial !important; padding-bottom: 12px !important; padding-left: 5px !important; padding-right: 5px !important; padding-top:12px !important; text-align: center !important; width: 100% !important }
         body { -webkit-text-size-adjust: none }
         .nl2go-responsive-hide { display: none }
         .nl2go-body-table { min-width: unset !important }
         .mobshow { height: auto !important; overflow: visible !important; max-height: unset !important; visibility: visible !important; border: none !important }
         .resp-table { display: inline-table !important }
         .magic-resp { display: table-cell !important }
         }

   </style>
   <!--[if !mso]><!-->
   <style type="text/css" emogrify="no">
         @import url("https://fonts.googleapis.com/css2?family=Nunito");

   </style>
   <!--<![endif]-->
   <style type="text/css">
         p, h1, h2, h3, h4, ol, ul { margin: 0; }
         a, a:link { color: #0092ff; text-decoration: underline }
         .nl2go-default-textstyle { color: #3b3f44; font-family: nunito,arial,helvetica,sans-serif;font-size: 16px; line-height: 1.5 }
         .default-button { border-radius: 4px;color: #ffffff; font-family: nunito,arial,helvetica,sans-serif; font-size: 16px; font-style: normal; font-weight: bold; line-height: 1.15; text-decoration: none; width: 50% }
         .default-heading1 { color: #1F2D3D; font-family: nunito,arial,helvetica,sans-serif; font-size: 36px }
         .default-heading2 { color: #1F2D3D; font-family: nunito,arial,helvetica,sans-serif; font-size: 32px }
         .default-heading3 { color: #1F2D3D; font-family: nunito,arial,helvetica,sans-serif; font-size: 24px }
         .default-heading4 { color: #1F2D3D; font-family: nunito,arial,helvetica,sans-serif; font-size: 16px }
         a[x-apple-data-detectors] { color: inherit !important; text-decoration: inherit !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
         .no-show-for-you { border: none; display: none; float: none; font-size: 0; height: 0; line-height: 0; max-height: 0; mso-hide: all; overflow: hidden; table-layout: fixed; visibility: hidden; width: 0; }

   </style>
   <!--[if mso]>
   <xml>
      <o:OfficeDocumentSettings>
         <o:AllowPNG/>
         <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
   </xml>
   <![endif]-->
   <style type="text/css">a:link{color: #0092ff; text-decoration: underline}</style>
</head>
<body text="#3b3f44" link="#0092ff" yahoo="fix" style="">
<table cellspacing="0" cellpadding="0" border="0" role="presentation" class="nl2go-body-table" width="100%" style="width: 100%;background:#F2F4F5">
   <tr>
      <td align="center" class="r0-c">
         <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="600" class="r1-o br-12"
                style="table-layout: fixed; width: 600px;background:#FFF;margin-top:48px;margin-bottom:48px">
            <tr>
               <td class="r2-c" align="center" style="padding:24px;">
                  <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r3-o"
                         style="table-layout: fixed; width: 100%;">
                     <tr>
                        <td class="r11-i" style="background-color: #ffffff;">
                           <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                              <tr>
                                 <td align="left" valign="top" class="r15-i nl2go-default-textstyle"
                                     style="color: #3b3f44; font-family: nunito,arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;">
                                    <div>
                                       <#nested>
                                    </div>
                                 </td>
                              </tr>
                              <tr class="nl2go-responsive-hide">
                                 <tdheight
                                 ="15" style="font-size: 15px; line-height: 15px;"></td> </tr>
                           </table>
                        </td>
                     </tr>
                  </table>
               </td>
            </tr>
         </table>
      </td>
   </tr>
</table>
</td> </tr>
</body>
</html>
</#macro>

