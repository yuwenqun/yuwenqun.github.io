## http event
|  事件   | 描述  |
|  ----  | ----  |
| http_all_headers： event | 为 HTTP 标头生成，一次传递 HTTP 消息的所有标头。 |
| http_begin_entity： event | 在开始解析 HTTP 正文实体时生成。 |
| http_connection_upgrade： event  | 当 HTTP 会话升级到不同的协议时生成  |
| http_content_type： event | 生成用于报告 HTTP 正文的内容类型。 |
| http_end_entity： event | 在完成解析 HTTP 正文实体时生成。 |
| http_entity_data： event | 在解析 HTTP 正文实体时生成，传递数据。 |
| http_event： event | 为解码 HTTP 请求或回复时发现的错误生成。 |
| http_header： event | 为 HTTP 标头生成。 |
| http_message_done： event | 在解析 HTTP 消息结束时生成一次。 |
| http_reply： event | 为 HTTP 回复生成。 | 
| http_request： event | 为 HTTP 请求生成。 |
| http_stats： event | 在 HTTP 会话结束时生成以报告有关它的统计信息。 |