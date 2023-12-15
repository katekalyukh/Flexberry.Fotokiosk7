import { Serializer as ПечатьSerializer } from
  '../mixins/regenerated/serializers/i-i-s-fotokiosk7-печать';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПечатьSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
