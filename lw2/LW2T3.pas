PROGRAM Lw2T3;
USES DOS;
VAR
  Text1, Text2: STRING;
  Ch: CHAR;
  YesNo: BOOLEAN;
  i: INTEGER;
BEGIN
  Text1 := GETENV('QUERY_STRING');
  YesNo := TRUE;
  IF LENGTH(Text1) > 0
  THEN
    FOR i := 1 TO LENGTH(Text1)
    DO
      BEGIN
        IF Text1[i] <> ''
        THEN
          YesNo := FALSE;
        IF YesNo
        THEN
          DELETE(Text1, i, 1);
      END;
  IF LENGTH(Text1) > 0
  THEN
    Text2 := 'dear ' + Text1
  ELSE
    Text2 := 'Anonymous';
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('Hello ', Text2, '!')
END.