PROGRAM WorkWithQueryString(INPUT, OUTPUT);
USES
  DOS;
FUNCTION GetQueryStringParameter(KEY: STRING): STRING;
VAR
  Text: STRING;
  i, k: INTEGER;
BEGIN
  GetQueryStringParameter := '';
  Text := GETENV('QUERY_STRING');
  DELETE(Text, 1, (POS(KEY, Text) + LENGTH(KEY)));
  WHILE (Text[1] <> '&') AND (LENGTH(Text) > 0)
    DO
      BEGIN
        GetQueryStringParameter := GetQueryStringParameter + Text[1];
        DELETE(Text, 1, 1)
      END
END;
BEGIN
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END.