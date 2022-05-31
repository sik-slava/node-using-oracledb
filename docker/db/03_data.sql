conn node/oracledb;
show user;

insert into ITEM (ITEM_ID, ITEM_NAME) values (1, 'dummy');
insert into ITEM_KID (ITEM_KID_ID, ITEM_KID_NAME, ITEM_ID) values (10, 'dummy_kid', 1);
commit;
