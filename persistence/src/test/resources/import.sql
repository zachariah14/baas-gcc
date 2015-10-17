insert into message(id, header, body) values (0, 'Header1', 'Hello!');
insert into message(id, header, body) values (1, 'Header2', 'Good bye!');
insert into message(id, header, body) values (2, 'Header3', 'This is test');
insert into message(id, header, body) values (3, 'Header4', 'Hmm?');
insert into message(id, header, body) values (4, 'Header5', 'Trolololo.');
insert into message(id, header, body) values (5, 'Header6', 'Witam.');
insert into message(id, header, body) values (6, 'Header7', 'czy nosorożce mają uczucia?');
insert into message(id, header, body) values (7, 'Header8', 'doh.');
insert into message(id, header, body) values (8, 'Header9', 'blah blah.');
insert into message(id, header, body) values (9, 'Header10', 'Some message blah.');

-- /*JavaScriptModel*/
insert into java_script_quest(quest_id, question, answer) values (0, 'Question1', 'Answer1');
insert into java_script_quest(quest_id, question, answer) values (1, 'Question2', 'Answer2');

/*Answer*/
insert into answer(answer_id, quest_id, answer) values (0,0,'QuestOption1');
insert into answer(answer_id, quest_id, answer) values (1,0,'QuestOption2');
insert into answer(answer_id, quest_id, answer) values (2,1,'QuestOption3');
insert into answer(answer_id, quest_id, answer) values (3,1, 'QuestOption4');

