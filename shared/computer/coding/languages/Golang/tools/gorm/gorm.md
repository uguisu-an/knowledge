gormでSQLを見たかったら、接続にロガーを設定する。
db.Logger = db.Logger.LogMode(logger.Info)
