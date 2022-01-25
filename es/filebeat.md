## README

```
filebeat.inputs:
- type: log
  enabled: true
  paths: ["/root/zeek/sechttp.log"] 
processors:
 - drop_fields:
    fields:
    - agent.ephemeral_id
    - agent.hostname
    - agent.name
    - agent.id
    - agent.type
    - agent.version
    - ecs.version
    - input.type
    - log.offset
    - version
    - tags
    - orig_fuids
 - decode_json_fields:
     fields: ['message']
     target: ''
     overwrite_keys: true
 - drop_fields:
     fields: ["user_agent","host"]
setup.ilm.enabled: false
setup.template.name: "seclog"
setup.template.pattern: "seclog*"
setup.template.settings: 
  index.number_of_shards: 1
  index.number_of_replicas: 0
  index.codec: best_compression 
output.elasticsearch:
  hosts: ["172.16.216.1:9200"]
  index: "seclog%{+yyyyMMdd}"
```